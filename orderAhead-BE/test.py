import os
import json
from config import app
from models.user import User
from models.product import Product
from models.category import Category
from models.brand import Brand
from models.type import Type
from models.brand_search import BrandSearch
from pathlib import Path
import json


@app.route("/test", methods=["GET"])
def test():
  # p = Product("'02877385")
  # list_cats = Category.get_list()
  # print(list_cats)
  # for cat in list_cats: print(cat.name)
  # cat = Brand('Warren\'s Cannabis Creations')
  # print('---------------------------------*************************')
  # products = cat.get_products()
  # for product in products:
  #   print(product.data)
  # print('xinchao')
  # information = Product.get_all_tier_information()
  # information2 = Product.get_product_tier_information('8Chirpyq2f')
  # f = open('D:\\Temp\\text.txt', 'w')
  # f.write(json.dumps(information))
  # f.close()

  # f = open('D:\\Temp\\text2.txt', 'w')
  # f.write(json.dumps(information2))
  # f.close()

  # type_list = Type.get_list()
  # print(type_list[0].get_brand_list())

  # params = {'type': 'Sugar'}
  # search = BrandSearch(params)
  # brands = search.get_list()
  # print(brands)

  # print(os.path.dirname(os.path.realpath(__file__)))
  # current_dir = os.path.dirname(os.path.realpath(__file__))
  # Path(current_dir + "/public/uploads/types").mkdir(parents=True, exist_ok=True)

  # print('xin chao cac ban than men cua toi toi yeu cac ban lam lam ma sao cac ban khong he yeu toi the ha?')
  # a = json.dumps('US')
  # print(a)



  return 'Please check log on python console'