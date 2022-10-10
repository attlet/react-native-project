from typing import Union
from fastapi import FastAPI
from binance.client import Client
from binance.exceptions import BinanceAPIException

app = FastAPI()
api_key = 'rskXdqhCU8kLzjaHMGOvgUhZOAuUVahduosufTlJyN43RSJKdCHGe9Eow9Axleuu'
api_secret = 'gPGaA0gN20m31R5msnwgKmxmEZz5'
#gPGaA0gN20m31R5msnwgctAy2TQOfy55frDtZoDQx1v3l7Px08k46vMGKmxmEZz5

client = Client(api_key= api_key, api_secret=api_secret)



@app.get("/")
def read_root():
    return {"success": 1}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/signIn")
def read_user():
    isExist = True
    
    try:
       wallet = client.get_asset_balance(asset='USDT')
    except BinanceAPIException as e:
        isExist = False
    
    if isExist == True:
        return {"isExist" : 1}
    else:
        return {"isExist" : 0}
