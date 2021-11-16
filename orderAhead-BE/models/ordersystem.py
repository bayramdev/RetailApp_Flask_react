import json
from flask_cors import cross_origin
from flask import Flask, jsonify, request
import requests
import os
from config import app
from models.datatable_factory import DatatableFactory
from models.category import Category
from models.brand import Brand
from models.product import Product

@app.route('/ordersystem/loadCategories', methods=['GET'])
@cross_origin()
def os_loadCategories():
    category_list = Category.get_list()
    data = []
    for category in category_list:
      data.append(category.toJSON())

    response = app.response_class(
        response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/ordersystem/loadBrands', methods=['GET'])
@cross_origin()
def os_loadBrands():
    brand_list = Brand.get_list()
    data = []
    for brand in brand_list:
      data.append(brand.toJSON())

    response = app.response_class(
        response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/ordersystem/loadProducts', methods=['GET', 'POST'])
@cross_origin()
def os_loadProducts():
  if not request.is_json:
        return jsonify({"status": False, "message": "Input error!"})

  content = request.get_json()
  category_name = content.get("category")
  brand_name = content.get("brand")

  if category_name:
    product_list = Category(category_name).get_products()
  elif brand_name:
    product_list = Brand(brand_name).get_products()
  data = []
  for product in product_list:
    data.append(product.toJSON())

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response

@app.route('/ordersystem/loadProduct', methods=['GET', 'POST'])
@cross_origin()
def os_loadProduct():
  if not request.is_json:
        return jsonify({"status": False, "message": "Input error!"})

  content = request.get_json()
  sku = content.get("sku")
  print('SKU')
  print(sku)

  product = Product(sku)
  data = product.toJSON()

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response
