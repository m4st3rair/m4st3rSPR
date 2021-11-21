from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow import fields

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

class PaisesSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombrePais')

#(self, 'nombre', 'apellidos', 'telefono', 'password', 'email', 'pais', 'region', 'email_auxiliar', 'fecha_creacion', 'id_stripe')
class UserSchema(ma.Schema):
    class Meta:
        fields=('id', 'nombre', 'apellidos', 'telefono', 'password', 'email', 'pais', 'region', 'email_auxiliar', 'fecha_creacion', 'id_stripe')
    pass

