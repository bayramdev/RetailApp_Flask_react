import json

from flask import Flask, request, jsonify
import os
import common
from model import user
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt_identity,
)
from flask_cors import cross_origin
from flask_mail import Mail, Message
from random import randint, randrange

# Init app
app = Flask(__name__)

# Application Configuration
SENDER_EMAIL = os.getenv('SEND_EMAIL')
app.config['MAIL_SERVER'] = os.getenv('EMAIL_HOST')
app.config['MAIL_PORT'] = os.getenv('EMAIL_PORT')
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_HOST_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_HOST_PASSWORD')
app.config['MAIL_USE_TLS'] = os.getenv('EMAIL_USE_TLS')
app.config['MAIL_USE_SSL'] = os.getenv('EMAIL_USE_SSL')

app.config['SECRET_KEY'] = 'OrderaheadSecretKey'
app.config['JWT_SECRET_KEY'] = 'SecretSecureKy'
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']

# JwtManager object
jwt = JWTManager(app)
# create an instance of the Mail class
mail = Mail(app)

db_name = 'order.db'


# Flask maps HTTP requests to Python functions.
# The process of mapping URLs to functions is called routing.
@app.route('/', methods=['GET'])
def home():
    return "<h1>API for Order ahead</h1>"


# Log In
@app.route('/users/authenticate', methods=["POST", "OPTIONS"], strict_slashes=False)
@cross_origin()
def logIn():
    # Receives the data in JSON format in a HTTP POST request
    if not request.is_json:
        return jsonify({"status": False, "message": "Input error!"})

    content = request.get_json()
    email = content.get("email")
    password = content.get("password")

    if not (email or password):
        return jsonify({"status": False, "message": "Please input the email and password."})

    result = user.getUserByEmail(email)

    if result:
        if common.verify_hash(password, result['password']):
            access_token = create_access_token(identity=email)

            if result['is_active']:
                verif_code = randint(1000000, 9999999)
                # if result['mfa'] == 'email':
                #     msg = Message('Welcome to Order Ahead', sender=SENDER_EMAIL, recipients=email)
                #     msg.body = "Verification code:\n" + verif_code
                #     mail.send(msg)

                response = app.response_class(
                    response=json.dumps({"status": True, "message": "successfully logged in", "data": "{}".format(result['id']),
                                         "isAdmin": result['is_superuser'], "token": access_token}),
                    status=200,
                    mimetype='application/json'
                )
                return response
            else:
                response = app.response_class(
                    response=json.dumps({"status": False, "message": "Your account need to be active"}),
                    status=401,
                    mimetype='application/json'
                )
                return response
        else:
            response = app.response_class(
                response=json.dumps({"status": False, "message": "Wrong credential"}),
                status=401,
                mimetype='application/json'
            )
            return response
    else:
        return jsonify({"status": False, "message": "Email or password is not correct."})


# Register
@app.route('/users/register', methods=["POST", "OPTIONS"], strict_slashes=False)
@cross_origin()
def register():
    # Receives the data in JSON format in a HTTP POST request
    if not request.is_json:
        return jsonify({"status": False, "message": "Input error!"})

    content = request.get_json()
    username = content.get("username")
    email = content.get("email")
    password = content.get("password")

    if not (username or email or password):
        return jsonify({"status": False, "message": "Input error!"})

    user.saveUserByUsernameAndEmailAndPassword(username, email, password)

    response = app.response_class(
        response=json.dumps({"status": True, "message": "successfully registered"}),
        status=200,
        mimetype='application/json'
    )
    return response


# Get the user info by id
@app.route('/getUser', methods=['GET'])
@cross_origin()
def getUserById():
    query_parameters = request.args

    id = query_parameters.get('id')

    if not id:
        return jsonify({"status": False, "message": "Input error!"})

    results = user.getUserById(id)

    return jsonify(results)


# Get all users
@app.route('/users', methods=['GET'])
@cross_origin()
def users_all():

    return jsonify(user.getAllUsers())


# Get update profile(first_name, last_name, phone_number)
@app.route('/users/<int:update_id>',  methods=['PUT'])
@cross_origin()
def update_entry(update_id):

    content = request.get_json()
    first_name = content.get("first_name")
    last_name = content.get("last_name")
    phone_number = content.get("phone_number")
    update_id = int(update_id)

    if not (update_id or first_name or last_name or phone_number):
        return jsonify({"status": False, "message": "Input error!"})

    user.updateNameAndPhoneById(first_name, last_name, phone_number, update_id)

    response = app.response_class(
        response=json.dumps({"status": True, "message": "successfully updated"}),
        status=200,
        mimetype='application/json'
    )
    return response


# Get update profile(MFA)
@app.route('/updateMfa/<int:update_id>',  methods=['PUT'])
@cross_origin()
def update_mfa(update_id):

    content = request.get_json()
    mfa = content.get("mfa")
    update_id = int(update_id)

    if not (update_id or mfa):
        return jsonify({"status": False, "message": "Input error!"})

    user.updateMFAById(mfa, update_id)

    response = app.response_class(
        response=json.dumps({"status": True, "message": "successfully updated"}),
        status=200,
        mimetype='application/json'
    )
    return response


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found</p>", 404


# A method that runs the application server.
if __name__ == "__main__":
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=False, threaded=True, port=os.getenv('PORT'))
