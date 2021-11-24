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

    sql = f'''
      SELECT pt."Name", pt."Image_Url", pt."Price From", pt."Price To"
      FROM "Product_Types" AS pt
      WHERE pt."Name" IN (
          SELECT DISTINCT "{cls.column_name}"
          FROM "Inventory"
          WHERE {sql_where} "{cls.column_name}" IS NOT NULL AND "Room" = \'Sales Floor\'
        );
    '''
    return Postgres_DB.fetchall(sql, condition['params'], cls.build_type)

  @classmethod
  def build_type(cls, record):
    default_thumb = 'https://images.dutchie.com/d11298aa71b42ac444034a303c204d6a?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=175&w=175'
    product_type = cls(record[0])
    product_type.thumbnail = record[1] if record[1] is not None else default_thumb
    product_type.price_from = record[2]
    product_type.price_to = record[3]
    return product_type

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

  def toJSON(self):
    return {'name':self.name, 'thumbnail': self.thumbnail, 'price_from': self.price_from, 'price_to': self.price_to, 'link': self.get_link(), 'handle':sanitize_handle(self.name)}