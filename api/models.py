from . import db 

class Survey(db.Survey):
    id = db.Column(db.Integer, primary_key=True)

class User(db.User):
    id = db.Column(db.String(50), primary_key=True)
    email = db.Column(db.String(50))
    password = db.Column(db.String(50))
