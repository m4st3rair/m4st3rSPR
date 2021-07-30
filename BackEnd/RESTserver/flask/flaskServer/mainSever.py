from flask import Flask, json, request, jsonify
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from models import Task, Usuario, CategoriaEmpresa
from esquemas import CategoriaEmpresaSchema


app = Flask(__name__)
mail = Mail(app)
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



#db.create_all()
#db.drop_all()

#Esto solo es un ejemplo
class TaskSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description')
task_schema = TaskSchema()
tasks_schema = TaskSchema( many = True )
##ESQUEMAS
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


#def __init__(self,nombre ,apellidos ,password ,email ,telefon ,salario, idPaymentMethod ,idUserStripe):
@app.route('/usuario', methods=['POST'])
def nuevo_usuario():
    nombre= request.json['nombre']
    apellidos= request.json['apellidos']
    password= request.json['password']
    email= request.json['email']
    telefon= request.json['telefon']
    salario= request.json['salario']
    idPaymentMethod= request.json['idPaymentMethod']
    idUserStripe= request.json['idUserStripe']
    usuario=Usuario(nombre, apellidos, password, email, telefon, salario,  idPaymentMethod, idUserStripe)
    db.session.add(usuario)
    db.session.commit()

    # msg = Message('Hello', sender = 'yourId@gmail.com', recipients = [email])
    # msg.body = "Bienvenido al Equipo"
    # mail.send(msg)

    return jsonify(resp("Usuario Creado con exito", False, False) )
    
@app.route('/usuario/informacion', methods=['PUT'])
def update_usuario():
    nombre= request.json['nombre']
    apellidos= request.json['apellidos']
    telefon= request.json['telefon']
    salario= request.json['salario']
    idPaymentMethod= request.json['idPaymentMethod']
    idUserStripe= request.json['idUserStripe']
    usuario=Usuario(nombre=nombre, apellidos=apellidos, password=password, email=email, telefon=telefon, salario=salario,  idPaymentMethod=idPaymentMethod, idUserStripe=idUserStripe)
    db.session.add(usuario)
    db.session.commit()

@app.route('/usuario/password', methods=['PUT'])
def update_usuario():
    password= request.json['password']

    pass


    return jsonify(resp("Usuario Creado con exito", False, False) )



def resp(msg, error, objeto):
    return{"mensaje":msg, "error":error, "objeto":objeto}







if __name__ == "__main__":
    app.run(debug=True)
