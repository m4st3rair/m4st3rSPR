from flask import Flask, json, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exc
from flask_marshmallow import Marshmallow
from models import Task, Usuario, CategoriaEmpresa
from esquemas import CategoriaEmpresaSchema, UserSchema
import utilerias


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/proyectoadministrador'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# app.config['MAIL_SERVER']='smtp.gmail.com'
# app.config['MAIL_PORT'] = 465
# app.config['MAIL_USERNAME'] = 'antonio.islasromero@gmail.com'
# app.config['MAIL_PASSWORD'] = 'estefanyir'
# app.config['MAIL_USE_TLS'] = False
# app.config['MAIL_USE_SSL'] = True




db = SQLAlchemy(app)
ma = Marshmallow(app)



#Esto solo es un ejemplo
class TaskSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description')


task_schema = TaskSchema()
tasks_schema = TaskSchema( many = True )
##ESQUEMAS

##Usuario
usrS_schema = UserSchema(many=True)
usr_schema = UserSchema()




catEmpresa_schema = CategoriaEmpresaSchema()
catEmpresas_schema = CategoriaEmpresaSchema( many = True )


@app.route('/categoria-empresa', methods=['Post'])
def create_categoriaEmpresa():

    nombreCategoria = request.json['nombreCategoria']
    newCatEmpresa = CategoriaEmpresa(nombreCategoria)
    db.session.add(newCatEmpresa)
    db.session.commit()
    return jsonify(resp("categoria Creada con Exito", False, False) )






@app.route('/tasks', methods=['Post'])
def create_task():
    title = request.json['title']
    description = request.json['description']
    new_task= Task(title, description)
    db.session.add(new_task)
    db.session.commit()
    return task_schema.jsonify(new_task)

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks= Task.query.all()
    result = tasks_schema.dump(tasks)
    return jsonify(result)

@app.route('/tasks/<id>', methods=['GET'])
def get_task(id):
    task=Task.query.get(id)
    return task_schema.jsonify(task)

@app.route('/tasks', methods=['PUT'])
def update_task():
    task=Task.query.get(request.json['id'])
    titulo=request.json['title']
    desc= request.json['description']
    task.title=titulo
    task.description=desc
    db.session.commit()
    return task_schema.jsonify(task)

@app.route('/tasks/<id>', methods=['DELETE'])
def delete_task(id):
    task=Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({"Message":"Pues ya se borro"})

###COSAS PARA USUARIO
# - getUser                 
# - getUsers                *
# - update
# - inicio de sesion
# - cambio de pass

# - registro de srtipe
# - registro de paypal
# - control de errores


#def __init__(self, nombre, apellidos, telefono, password, email, pais, region, email_auxiliar, fecha_creacion, id_stripe):
@app.route('/usuarios/registro', methods=['POST'])
def nuevo_usuario():
 
    nombre= request.json['nombre']
    apellidos= request.json['apellidos']
    telefono= request.json['telefono']
    password= request.json['password']
    email= request.json['email']
    pais= request.json['pais']
    region= request.json['region']
    email_auxiliar= request.json['email_auxiliar']
    fecha_creacion= utilerias.dateNow()
    id_stripe= request.json['id_stripe']

    usuario=Usuario(nombre, apellidos, telefono, password, email, pais, region, email_auxiliar, fecha_creacion, id_stripe)

    return jsonify( save_registro("Usuario", usuario) )

@app.route('/usuarios', methods=['GET'])
def get_users():
    users= Usuario.query.all()
    result = usrS_schema.dump(users)
    return jsonify(resp("OK", False, result) )

@app.route('/usuarios/<id>', methods=['GET'])
def get_user(id):
    usuario=Usuario.query.get(id)
    result = usr_schema.dump(usuario)
    return jsonify(resp("OK", False, result) )


# @app.route('/usuario/informacion', methods=['PUT'])
# def update_usuario():
#     nombre= request.json['nombre']
#     apellidos= request.json['apellidos']
#     telefon= request.json['telefon']
#     salario= request.json['salario']
#     idPaymentMethod= request.json['idPaymentMethod']
#     idUserStripe= request.json['idUserStripe']
#     usuario=Usuario(nombre=nombre, apellidos=apellidos, password=password, email=email, telefon=telefon, salario=salario,  idPaymentMethod=idPaymentMethod, idUserStripe=idUserStripe)
#     db.session.add(usuario)
#     db.session.commit()

# @app.route('/usuario/password', methods=['PUT'])
# def update_usuario():
#     password= request.json['password']

#     pass


#     return jsonify(resp("Usuario Creado con exito", False, False) )



def resp(msg, error, objeto):
    return{"mensaje":msg, "error":error, "objeto":objeto}

def save_registro(tipoRegistro, objeto ):
    try:
        db.session.add(objeto)
        db.session.commit()
        msg = "Registro de ",tipoRegistro," exitoso"
        return resp(msg, False, False) 
    except exc.IntegrityError:
        print("Duplicidad")
        msg = "Registro de " +tipoRegistro+" Duplicado, porfavor verifique sus datos"
        return resp(msg, True, False) 
    except exc.SQLAlchemyError:
        print("Error en base de datos")
        msg = "Error en base de datos"
        return resp(msg, True, False) 
    except:
        print("Error en el servidor")
        msg = "Error en el servidor"
        return resp(msg, True, False)

if __name__ == "__main__":
    app.run(debug=True)
