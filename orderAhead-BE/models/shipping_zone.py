from models.postgres_db import Postgres_DB
class ShippingZone:
  def __init__(self):
    self.id = 0
    self.name = 0
    self.regions = 0

  @classmethod
  def get_list(cls):
    sql = '''
    SELECT "Zone ID", "Zone Name", "Zone Order"
    FROM "Shipping_Zones"
    '''

    return Postgres_DB.fetchall(sql, (), cls.build_zone)

  @classmethod
  def build_zone(cls, db_record):
    zone = cls()
    zone.id = db_record[0]
    zone.name = db_record[1]
    zone.regions = db_record[2]

    return zone

  def toJSON(self):
    return {
      'id': self.id,
      'name': self.name,
      'regions': self.regions,
    }


  def get_shipping_methods(self):
    pass

  def get_regions(self):
    pass

