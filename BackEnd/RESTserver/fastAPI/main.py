from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel

app=FastAPI()


@app.get('/')
def index():
    return {'usr':{'name':'Antonio', 'lastName':"Islas"}}


@app.get('/about')
def about():
    return {"donVergas":"Esto es lo que devuelvo"}

@app.get('/params/{id}')
def params(id):
    return {"id":id}

@app.get('/params/{id}/int')
def paramsInt(id:int):
    return {"idNumerico":id}


@app.get('/query/')
def query(id:int):
    return {"idPorQuery":id}

class Cliente(BaseModel):
    name:str
    lastName:str
    age:int
    sex:Optional[str]


@app.post('/addCliente')
def addcliente(cliente:Cliente):
    return {
        "data":{
            "fullName":f'{cliente.name} {cliente.lastName}',
            "age":cliente.age

        }
    }