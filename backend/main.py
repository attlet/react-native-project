from contextlib import nullcontext
from typing import List, Union
from fastapi import FastAPI, Request, WebSocket
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import Response
from binance.client import Client
from binance.exceptions import BinanceAPIException
import datetime
import time
import bot
import ccxt
# binance new

app = FastAPI()
# api_key = 'rskXdqhCU8kLzjaHMGOvgUhZOAuUVahduosufTlJyN43RSJKdCHGe9Eow9Axleuu'
# api_secret = ''

# client = Client(api_key= api_key, api_secret=api_secret)

TradeLog = []
OrderLog = []
Status = bool


class sign_info(BaseModel):
    api_key: str
    secret_key: str
    incorrect_api:  Union[bool, None] = None


class bot_info(BaseModel):
    id: Union[str, None] = None
    name: Union[str, None] = None
    amount: Union[str, None] = None
    pnl: Union[str, None] = None
    roe: Union[str, None] = None
    method: Union[str, None] = None
    status: Union[str, None] = None


class bot_list(BaseModel):
    bot: List[bot_info]
    
class log(BaseModel):
    time : Union[str, None] = None
    positionSide : Union[str, None] = None
    price : Union[str, None] = None
    pnl : Union[str, None] = None

class trade_log(BaseModel):
    trade_log : List[log]

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:19006"
]

async def catch_exceptions_middleware(request: Request, call_next):
    try:
        return await call_next(request)
    except Exception:
        return Response("Internal server error", status_code=500)

app.middleware('http')(catch_exceptions_middleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  # cross-origin request에서 허용할 쿠키들. 디폴트는 false
    allow_methods=["*"],  # cross-origin request로 허용할 method들. 디폴트는 get
    allow_headers=["*"],
)


# @app.get("/")
# def read_root():
#     return {"success": 1}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[int, None] = None):
#     while q == 1:
#         time.sleep(1)
#     return {"item_id": item_id, "q": q}


@app.post("/signIn")
def read_user(user: sign_info):
    
    binance = ccxt.binance(config={
    'apiKey': user.api_key,
    'secret': user.secret_key,
    'enableRateLimit': True,
    'options': {
        'defaultType': 'future'
     }
    })
# client = Client(api_key= api_key, api_secret=api_secret)
    user_dict = user.dict()
    test_param = binance.fetch_balance()
    user_dict.update({"balance": test_param["USDT"]["total"]})
    return user_dict


@app.post("/addBot")
def give_addBotData(addBot: bot_list):  # addBot : add_bot_info
    addBot_dict = addBot.dict()
    return addBot_dict



@app.post("/bot_trading")
def trading(user: sign_info, status : bool, standard_balance : str):
    
    global TradeLog
    global OrderLog
    global Status
    
    binance = ccxt.binance(config={
    'apiKey': user.api_key,
    'secret': user.secret_key,
    'enableRateLimit': True,
    'options': {
        'defaultType': 'future'
     }
    })

    symbol = "BTC/USDT"
    Status = True
    long_target, short_target = bot.cal_target(binance, symbol)
    balance = binance.fetch_balance()
    first_balance = float(standard_balance)
    usdt = balance['total']['USDT']
    op_mode = False
    position = {
        "type": None,
        "amount": 0
    }
 
    while Status is True: 
       
        now = datetime.datetime.now()

        if now.hour == 19 and now.minute == 40 and (0 <= now.second < 10):
            if op_mode and position['type'] is not None:
                end_position = bot.exit_position(binance, symbol, position)
                balance = binance.fetch_balance()
                roe = balance - first_balance
                pnl = (roe / first_balance) * 100
                TradeLog.append({
                    "time" : now,
                    "positionSide" : end_position,
                    "price" : roe,
                    "pnl" : pnl
                })
                op_mode = False         # 9시 까지는 다시 포지션 진입하지 않음 

    # udpate target price
        if now.hour == 19 and now.minute == 30 and (20 <= now.second < 30):
            long_target, short_target = bot.cal_target(binance, symbol)
            balance = binance.fetch_balance()
            usdt = balance['total']['USDT']
            op_mode = True 
            time.sleep(10)

        ticker = binance.fetch_ticker(symbol)
        cur_price = ticker['last']
        amount = bot.cal_amount(usdt, cur_price)

        if op_mode and position['type'] is None:
            bot.enter_position(binance, symbol, cur_price, long_target, short_target, amount, position, OrderLog)

        print(now, cur_price, long_target, short_target, amount)
        time.sleep(1)
    
    return {"running stop": 1}

@app.put("/control_trading")
def change_status(status : bool):
    global Status
    Status = status
    
    return {"Status change" : 1}

  
@app.get("/trade_log")
def get_log():
    global TradeLog
    
    return TradeLog
    
    
@app.get("/order_log")
def get_order():
    global OrderLog
    
    return OrderLog
