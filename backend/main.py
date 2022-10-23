from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from binance.client import Client
from binance.exceptions import BinanceAPIException

app = FastAPI()
# api_key = 'rskXdqhCU8kLzjaHMGOvgUhZOAuUVahduosufTlJyN43RSJKdCHGe9Eow9Axleuu'
# api_secret = 'gPGaA0gN20m31R5msnwgctAy2TQOfy55frDtZoDQx1v3l7Px08k46vMGKmxmEZz5'
#gPGaA0gN20m31R5msnwgctAy2TQOfy55frDtZoDQx1v3l7Px08k46vMGKmxmEZz5

# client = Client(api_key= api_key, api_secret=api_secret)

class sign_info(BaseModel):
    api_key : str
    secret_key : str

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
    