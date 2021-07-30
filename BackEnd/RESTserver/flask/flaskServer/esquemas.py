from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/proyectoadministrador'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class TaskSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description')

class CategoriaEmpresaSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombreCategoria')