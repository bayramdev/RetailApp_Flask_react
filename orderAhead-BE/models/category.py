from models.postgres_db import Postgres_DB
from models.base import Base
from models.product import Product

class Category(Base):
  def __init__(self, name):
    self.name = name

  @classmethod
  def get_list(cls, options={}):
    sql = f'SELECT DISTINCT "Category" FROM "Inventory";'
    return Postgres_DB.fetchall(sql, (), cls.build_category)

  @classmethod
  def build_category(cls, record):
    return cls(record[0])

  def get_products(self, options = {}):
    select_fields = Product.get_select_fields()
    sql = f'SELECT {select_fields} FROM "Inventory" WHERE "Category" = %s LIMIT 10 OFFSET 0'

    return Postgres_DB.fetchall(sql, (self.name, ), Product.build_product)