from models.shipping.zone import ShippingZone
from models.shipping.method import ShippingMethod
from models.shipping.instance import MethodInstance

class ShippingFacade:
  def create_method_instance(self, method_id, zone_id = None):
    if zone_id is None:
      zone = ShippingZone.create()
    else:
      zone = ShippingZone(zone_id)

    method = ShippingMethod(method_id)
    return MethodInstance.create(zone, method)

  def delete_method_instance(self, instance_id):
    instance = MethodInstance(instance_id)
    instance.delete()

  def update_method_instance(self, instance_id, changes = {}):
    instance = MethodInstance(instance_id)
    instance.load()
    instance.bind(changes)
    instance.save()
    return instance


  def get_method_list(self):
    return ShippingMethod.find_all()

  def create_zone(self, data = {}):
    zone = ShippingZone.create()
    zone.bind(data)
    zone.save()
    return zone

  def update_zone(self, zone_id, changes = {}):
    zone = ShippingZone(zone_id)
    zone.load()
    zone.bind(changes)
    zone.save()
    return zone

  def get_zone_list(self):
    zone_list = ShippingZone.find_all()
    return zone_list

  def delete_zone(self, zone_id):
    zone = ShippingZone(zone_id)
    zone.delete()