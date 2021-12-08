from models.active_record import ActiveRecord

class ZoneLocation(ActiveRecord):
  table_name = "Shipping_Zone_Locations"
  primary_key = "ID"
  allow_fields = {
    'code': 'Location Code',
    'type': 'Location Type',
    'zone_id': 'Zone ID',
  }