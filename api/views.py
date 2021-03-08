from flask import Blueprint, jsonify, request
from . import db 
from .models import Movie

main = Blueprint('main', __name__)

@main.route('/add_user', methods=['POST'])
def add_user():
    user_data = request.get_json()

    return 'Done', 201

@main.route('/survey')
def survey():
