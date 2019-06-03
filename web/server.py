from flask import Flask,render_template, request, session, Response, redirect
from database import connector
from model import entities
import json
import time

db = connector.Manager()
engine = db.createEngine()

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/login.html')
def login():
    return render_template('login.html')


@app.route('/static/index.html')
def reindex():
    return render_template('index.html')

@app.route('/static/forgot-password.html')
def forgot_password():
    return render_template('forgot-password.html')

@app.route('/static/register.html')
def register():
    return render_template('register.html')

@app.route('/static/<content>',methods=['POST'])
def static_content(content):
    return render_template(content)

@app.route('/authenticate', methods = ['POST'])
def authenticate():
    time.sleep(4)
    #1 Get data from requesr
    message = json.loads(request.data)
    email = message['email']
    password = message['password']

    #2 look in database
    db_session = db.getSession(engine)
    try:
        user = db_session.query(entities.User
            ).filter(entities.User.email == email
            ).filter(entities.User.password == password
            ).one()
        message = {'message': 'Authorized'}
        return Response(message, status=200, mimetype='application/json')
    except Exception:
        message = {'message': 'Unauthorized'}
        return Response(message, status=401, mimetype='application/json')


if __name__ == '__main__':
    app.secret_key = ".."
    app.run(port=8080, threaded=True, host=('127.0.0.1'))
