from typing import Union
from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import Response
from binance.client import Client
from binance.exceptions import BinanceAPIException

app = FastAPI()
# api_key = 'rskXdqhCU8kLzjaHMGOvgUhZOAuUVahduosufTlJyN43RSJKdCHGe9Eow9Axleuu'
# api_secret = ''

# client = Client(api_key= api_key, api_secret=api_secret)

class sign_info(BaseModel):
    api_key : str
    secret_key : str
    
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
    allow_credentials=True,                     #cross-origin request에서 허용할 쿠키들. 디폴트는 false
    allow_methods=["*"],                        #cross-origin request로 허용할 method들. 디폴트는 get
    allow_headers=["*"],
)



@app.get("/")
def read_root():
    return {"success": 1}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/signIn")
def read_user(user : sign_info):
   client = Client(api_key= user.api_key, api_secret=user.secret_key)
   user_dict = user.dict()
   test_param = client.get_asset_balance(asset='USDT')
   
   user_dict.update({"my balance" : test_param})
   
   return user_dict
    
