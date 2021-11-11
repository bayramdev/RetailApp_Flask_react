from .postgres_db import Postgres_DB

from models.base import Base

class Product(Base):
  allow_fields = {
    'sku': 'SKU',
    'product_name': "Product Name",
    'product_type': "Product Type",
  }

  def __init__(self, sku = ''):
    self.sku = sku
    self.data = {}
    if len(sku) > 0:
      self.load_data()

  def load_data(self):
    select_fields = self.get_select_fields()
    sql = f'SELECT {select_fields} FROM "public"."Inventory" WHERE "SKU" = %s LIMIT 1 '

    Postgres_DB.fetchone(sql, (self.sku, ), self.build_data)

  def build_data(self, db_record):
    self.data = {}
    for index, field in enumerate(self.allow_fields.keys()):
      # setattr(self, field, db_record[index])
      self.data[field] = db_record[index]

    return self.data

  @classmethod
  def build_product(cls, db_record):
    product = cls()
    product.build_data(db_record)

    return product