import json
from flask_cors import cross_origin
from flask import Flask, jsonify, request
import requests
import os
from config import app
from models.datatable_factory import DatatableFactory
from models.category import Category
from models.brand import Brand
from models.type import Type
from models.product import Product
from models.product_search import ProductSearch
from models.brand_search import BrandSearch
from models.customer import Customer
from pathlib import Path
from models.product_review import ProductReview
from models.product_type import ProductType
from models.shipping_zone import ShippingZone
from models.shipping_manager import ShippingManager


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

@app.route('/ordersystem/loadBrands', methods=['GET', 'POST'])
@cross_origin()
def os_loadBrands():
    content = request.get_json()
    category_name = content.get("category")
    type_name = content.get("type")

    params = {'category': category_name, 'type': type_name}
    search = BrandSearch(params)
    brand_list = search.get_list()
    data = []
    for brand in brand_list:
      data.append(brand.toJSON())

    response = app.response_class(
        response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/ordersystem/loadTypes', methods=['GET', 'POST'])
@cross_origin()
def os_loadTypes():
    content = request.get_json()
    # category_name = content.get("category")
    # brand_name = content.get("brand")
    # type_name = content.get("type")

    type_list = Type.get_list()
    data = []
    for xtype in type_list:
      data.append(xtype.toJSON())

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
  type_name = content.get("type")

  # if category_name:
  #   product_list = Category(category_name).get_products()
  # elif brand_name:
  #   product_list = Brand(brand_name).get_products()
  # elif type_name:
  #   product_list = ProductType(type_name).get_products()

  search = ProductSearch({'category': category_name, 'brand': brand_name, 'type': type_name})
  product_list = search.get_products()

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
  product = Product(sku)
  data = product.toJSON()

  reviews = product.get_reviews()
  print('reviews')
  print(reviews)
  data['reviews'] = reviews

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response

@app.route('/ordersystem/osLoadType', methods=['GET', 'POST'])
@cross_origin()
def os_loadType():
  if not request.is_json:
        return jsonify({"status": False, "message": "Input error!"})

  content = request.get_json()
  name = content.get("name")

  productType = Type(name)
  productType.load_data()
  data = productType.toJSON()

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response

@app.route('/ordersystem/osUpdateType', methods=['GET', 'POST'])
@cross_origin()
def os_updateType():
  thumbnail_file = request.files['typeThumbnail']
  type_name = request.form['typeName']
  price_from = request.form['price_from']
  price_to = request.form['price_to']

  type_obj = Type(type_name)
  type_obj.load_data()

  if (thumbnail_file):
    root_dir = os.path.dirname(os.path.realpath(__file__)) + '/../../orderAhead-FE/build/'
    relative_path = "/img/types"
    type_dir = root_dir + relative_path
    Path(type_dir).mkdir(parents=True, exist_ok=True)

    thumbnail_file.save(type_dir + '/' + thumbnail_file.filename)
    thumbnail_url = relative_path + '/' + thumbnail_file.filename
    type_obj.image_url = thumbnail_url

  if price_from is None:
    price_from = 0
  if price_to is None:
    price_to = 0

  type_obj.price_from = price_from
  type_obj.price_to = price_to
  type_obj.save()


  # productType = Type(name)
  # productType.load_data()
  # data = productType.toJSON()
  data = type_obj.toJSON()

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response

@app.route('/ordersystem/osGetBoughtProductReviews', methods=['GET', 'POST'])
@cross_origin()
def os_getBoughtProductReviews():
  content = request.get_json()
  customer_id = content.get('customer_id')
  customer = Customer(customer_id)
  data = customer.get_bought_product_list()
  print('data')
  print(data)

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response

@app.route('/ordersystem/osLoadReview', methods=['GET', 'POST'])
@cross_origin()
def os_loadReview():
  content = request.get_json()
  customer_id = content.get('customer_id')
  sku = content.get('sku')

  review = ProductReview(customer_id, sku)
  review.load_data()
  data = review.toJSON()

  print('data')
  print(data)

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response

@app.route('/ordersystem/osUpdateReview', methods=['GET', 'POST'])
@cross_origin()
def os_updateReview():
  content = request.get_json()
  print(content)

  review = ProductReview(content['customer_id'], content['sku'])
  review.bind_data(content)
  review.save()
  data = review.toJSON()

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response


@app.route('/ordersystem/osLoadProductTypesByCategory', methods=['GET', 'POST'])
@cross_origin()
def osLoadProductTypesByCategory():
  content = request.get_json()

  result = ProductType.get_list({'category': content.get('category')})
  data = []
  for product_type in result:
    data.append(product_type.toJSON())

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response

@app.route('/ordersystem/osLoadShippingZones', methods=['GET', 'POST'])
@cross_origin()
def osLoadShippingZones():
  # content = request.get_json()

  result = ShippingZone.get_list()
  data = []
  for zone in result:
    data.append(zone.toJSON())

  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response


@app.route('/ordersystem/osGetShippingMethods', methods=['GET', 'POST'])
@cross_origin()
def osGetShippingMethods():
  params = request.get_json()
  data = ShippingManager.get_available_methods(params)
  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response


@app.route('/ordersystem/osRecalculatePrice', methods=['GET', 'POST'])
@cross_origin()
def osRecalculatePrice():
  params = request.get_json()
  data = ProductType.recalculate_all_prices()
  response = app.response_class(
      response=json.dumps({"status": True, "message": "successfully sent", "data": data}),
      status=200,
      mimetype='application/json'
  )
  return response


