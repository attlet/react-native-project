from typing import Union
from fastapi import FastAPI
from binance.client import Client

app = FastAPI()
api_key = 'rskXdqhCU8kLzjaHMGOvgUhZOAuUVahduosufTlJyN43RSJKdCHGe9Eow9Axleuu'
api_secret = 'gPGaA0gN20m31R5msnwgctAy2TQOfy55frDtZoDQx1v3l7Px08k46vMGKmxmEZz5'

client = Client(api_key= api_key, api_secret=api_secret)

tickers = client.get_all_tickers()

@app.get("/")
def read_root():
    return tickers


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

