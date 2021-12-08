from models.active_record import ActiveRecord

class MethodInstance(ActiveRecord):
  table_name = 'Shipping_Zone_Methods'
  primary_key = 'ID'
  allow_fields = {
    'zone_id': 'Zone ID',
    'method_id': 'Method ID',
    'title': 'Title',
    'cost': 'Cost',
    'is_enabled': 'Is Enabled',
    'ordering': 'Ordering',
  }

  @staticmethod
  def create(zone, method):
    method.load()

    instance = MethodInstance(None)
    instance.bind({
      'zone_id': zone.id,
      'method_id': method.id,
      'title': method.name,
      'ordering': MethodInstance.get_next_ordering(),
    })
    instance.save()
    return instance

  def get_zone(self):
    if self.is_loaded:
      return ShippingZone(self.zone_id)
    else:
      return None

  def get_method(self):
    if self.is_loaded:
      return ShippingMethod(self.method_id)
    else:
      return None