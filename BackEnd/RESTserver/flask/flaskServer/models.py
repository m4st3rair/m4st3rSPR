from flask_sqlalchemy import SQLAlchemy
from flask import Flask


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/proyectoadministrador'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), unique=True)
    description = db.Column(db.String(100))

    def __init__(self, title, description):
        self.title = title
        self.description = description


class Usuario(db.Model):
    #idPermisos = db.Column(db.Integer, )
    #idPuesto
    #idEstablecimiento
    #idTipoUser=         db.Column(db.Integer, )
    id =                db.Column(db.Integer, primary_key=True)
    nombre =            db.Column(db.String(30))
    apellidos=          db.Column(db.String(50))
    password=           db.Column(db.String(20))
    email=              db.Column(db.String(40), unique=True)
    telefon=            db.Column(db.Integer)
    salario=            db.Column(db.Float)
    idPaymentMethod=    db.Column(db.String(50))
    idUserStripe=       db.Column(db.String(50))
    relasionUsuario = db.relationship('ProyectoEmpresa',backref=db.backref('usuario', lazy=True),  primaryjoin="Usuario.id == ProyectoEmpresa.idUsuario" )
    
    def __init__(self,nombre ,apellidos ,password ,email ,telefon ,salario, idPaymentMethod ,idUserStripe):
        self.nombre=nombre
        self.apellidos=apellidos
        self.password=password
        self.email=email
        self.telefon=telefon
        self.salario=salario
        self.idPaymentMethod=idPaymentMethod
        self.idUserStripe=idUserStripe        
    


class ProyectoEmpresa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #idTipoLisencia
    nombre=db.Column(db.String(30))
    fechaRegistro=db.Column(db.DateTime )
    fechaInicioLicencia=db.Column(db.DateTime )
    fechaTerminoLicencia=db.Column(db.DateTime )
    urlLogotipo=db.Column(db.String(200) )
    numeroDeSucursales=db.Column(db.Integer)
    #Claves foraneas
    idUsuario = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    idCategoriaEmpresa=db.Column(db.Integer, db.ForeignKey('categoria_empresa.id'), nullable=False )
    
    def __init__(self, nombre, fechaRegistro, fechaInicioLicencia, fechaTerminoLicencia, urlLogotipo, idUsuario, usuario):
        self.nombre=nombre        
        self.fechaRegistro=fechaRegistro        
        self.fechaInicioLicencia=fechaInicioLicencia        
        self.fechaTerminoLicencia=fechaTerminoLicencia        
        self.urlLogotipo=urlLogotipo        
        self.idUsuario=idUsuario
        self.usuario=usuario







class CategoriaEmpresa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombreCategoria = db.Column(db.String(50), nullable=False)
    categoriaEmpresa=db.relationship('ProyectoEmpresa',backref=db.backref('CategoriaEmpresa', lazy=True),  primaryjoin="CategoriaEmpresa.id == ProyectoEmpresa.idCategoriaEmpresa" )
    
    def __init__(self, nombreCategoria):
        self.nombreCategoria=nombreCategoria
        

db.create_all()
#db.drop_all()