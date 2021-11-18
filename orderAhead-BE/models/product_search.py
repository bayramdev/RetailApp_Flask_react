from models.postgres_db import Postgres_DB
from models.product import Product
from common import fix_quote

class ProductSearch:
  def __init__(self, params):
    self.params = params

  def get_products(self, options = {'limit': 50, 'offset': 0}):
    select_fields = Product.get_select_fields()
    limit = options['limit']
    offset = options['offset']

    wherePart = self.createSearchCondition()
    sqlCondition = wherePart['sql']

    sql = f'SELECT {select_fields} FROM "Inventory" WHERE {sqlCondition} AND "Room" = \'Sales Floor\' LIMIT {limit} OFFSET {offset}'

    return Postgres_DB.fetchall(sql, wherePart['params'], Product.build_product)

  def createSearchCondition(self):
    sql = []
    params = ()
    if 'category' in self.params and self.params['category']:
      sql.append('"Category"=%s')
      params = params + (self.params['category'],)
    if 'brand' in self.params and self.params['brand']:
      sql.append('"Brand"=%s')
      params = params + (self.params['brand'],)
    if 'type' in self.params and self.params['type']:
      sql.append('"Product Type"=%s')
      params = params + (self.params['type'],)

    sql = ' AND '.join(sql)


    return {'sql':sql, 'params': params}