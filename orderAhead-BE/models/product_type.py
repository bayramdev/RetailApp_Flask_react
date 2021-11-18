from models.postgres_db import Postgres_DB
from models.category import Category
from common import sanitize_title, sanitize_handle

class ProductType(Category):
  column_name = "Product Type"

  def get_link(self):
    link = '/order/products?type=' + sanitize_title(self.name)
    return link

  @classmethod
  def get_list(cls, options={}):
    condition = cls.createCondition(options)
    sql_where = condition['sql']
    if sql_where:
      sql_where += ' AND '

    print('sql_where')
    print(sql_where)

    sql = f'SELECT DISTINCT "{cls.column_name}" FROM "Inventory" WHERE {sql_where} "{cls.column_name}" IS NOT NULL AND "Room" = \'Sales Floor\';'
    return Postgres_DB.fetchall(sql, condition['params'], cls.build_category)

  @classmethod
  def createCondition(cls, options):
    sql = []
    params = ()
    if 'category' in options and options['category']:
      sql.append('"Category"=%s')
      params = params + (options['category'],)
    if 'brand' in options and options['brand']:
      sql.append('"Brand"=%s')
      params = params + (options['brand'],)

    sql = ' AND '.join(sql)


    return {'sql':sql, 'params': params}