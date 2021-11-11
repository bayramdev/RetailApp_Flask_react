from config import app
from models.user import User
from models.product import Product
from models.category import Category
from models.brand import Brand

@app.route("/test", methods=["GET"])
def test():
  # p = Product("'02877385")
  list_cats = Category.get_list()
  print(list_cats)
  for cat in list_cats: print(cat.name)
  cat = Brand('Warren\'s Cannabis Creations')
  print('---------------------------------*************************')
  products = cat.get_products()
  for product in products:
    print(product.data)

  return 'Please check log on python console'