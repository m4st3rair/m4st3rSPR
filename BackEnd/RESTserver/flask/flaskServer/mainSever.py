from flask import Flask, json, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/proyectoadministrador'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), unique=True)
    description = db.Column(db.String(100))

    def __init__(self, title, description):
        self.title = title
        self.description = description

db.create_all()

class TaskSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description')


task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)


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

if __name__ == "__main__":
    app.run(debug=True)
