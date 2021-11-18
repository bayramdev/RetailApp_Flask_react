from .postgres_db import Postgres_DB
from common import sanitize_title
from models.base import Base

class Product(Base):
  allow_fields = {
    'sku': 'SKU',
    'batch_id': 'Batch ID',
    'brand': 'Brand',
    'calculated_weight_grams': 'Calculated Weight (Grams)',
    'category': 'Category',
    'cost_per_gram': 'Cost per Gram',
    'cost_per_item': 'Cost per Item',
    'created_on': 'Created On',
    'current_date': 'Current Date',
    'current_quantity': 'Current Quantity',
    'days_until_expires': 'Days Until Expires',
    'expiration_date': 'Expiration Date',
    'initial_quantity': 'Initial Quantity',
    'last_audit_date': 'Last Audit Date',
    'location': 'Location',
    'package_id': 'Package ID',
    'price': 'Price',
    'price_profile': 'Price Profile',
    'product_name': 'Product Name',
    'product_type': 'Product Type',
    'room': 'Room',
    'source_license': 'Source License',
    'strain_name': 'Strain Name',
    'supplier_name': 'Supplier Name',
    'total_cost': 'Total Cost',
    'total_price': 'Total Price',
    'unit_of_measure': 'Unit of Measure',
    'weight_unit': 'Weight Unit',
    'insert_datetime': 'insert_datetime',
    'img_url': 'img_url',
    'product_description': 'product_description',
  }

  def __init__(self, sku = ''):
    self.id = sku
    self.data = {}
    if len(sku) > 0:
      self.load_data()

  def load_data(self):
    select_fields = self.get_select_fields()
    sql = f'SELECT {select_fields} FROM "public"."Inventory" WHERE "SKU" = %s LIMIT 1 '

    Postgres_DB.fetchone(sql, (self.id, ), self.build_data)

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

  def get_link(self):
    link = '/order/product/' + self.sku
    return link

  def get_type_link(self):
    link = '/order/type/' + self.product_type
    return link

  def toJSON(self):
    thumbnail = 'https://images.dutchie.com/f0d012f401f84d82452884e213477bcc?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=344&w=344&q=75&dpr=1'
    if self.img_url:
      thumbnail = self.img_url
    return {
      'sku': self.sku,
      'name': self.product_name,
      'thumbnail': thumbnail,
      'price': self.price,
      'brand': self.brand,
      'type': self.product_type,
      'strain': 'Strain',
      'desc': self.product_description,
      'link': self.get_link(),
      'type_link': self.get_type_link(),
    }