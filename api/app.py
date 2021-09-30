from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ
 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/ecommerce'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
db = SQLAlchemy(app)
CORS(app)

class Product(db.Model):
    tablename = 'product'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    category_id = db.Column(db.Integer, nullable=False)
    image = db.Column(db.Text, nullable=False)
    qty = db.Column(db.Integer, nullable=False)

    def init(self, id, title, price, description, category_id, image, qty):
        self.id = id
        self.title = title
        self.price = price
        self.description = description
        self.category_id = category_id
        self.image = image
        self.qty = qty

    def json(self):
        return {"id": self.id, "title": self.title, "price": self.price, "description": self.description, "category_id": self.category_id, "image":self.image, "qty":self.qty}

@app.route("/products")
def get_all():
  return jsonify({"Products": [product.json() for product in Product.query.all()]})

if __name__ == '__main__':
    app.run(host='0.0.0.0' , port=5001, debug=True)