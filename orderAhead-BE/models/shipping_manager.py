from models.postgres_db import Postgres_DB

class ShippingManager:
  @staticmethod
  def get_available_methods(params):
    country = params['country']
    state = params['state']
    city = params['city']

    sql_params = ()
    criteria = []

    # country
    criteria.append('("Location Type" = \'country\' AND "Location Code" = %s)')
    sql_params += (country,)
    # state
    criteria.append('("Location Type" = \'state\' AND "Location Code" = %s)')
    sql_params += (state,)

    # other
    criteria.append('OR ( "Location Type" IS NULL ) )')


    postcode_locations = Postgres_DB.fetchall( 'SELECT "Zone ID", "Location Code" FROM "Shipping_Zone_Locations" WHERE "Location Type" = \'postcode\';' )
    print('postcode_locations', postcode_locations)
    if postcode_locations:
      pass



    print('state', state)
    print('city', city)


    data = [
      {'id': 'flat', 'name': 'Shiping name 1'},
      {'id': 'flat2', 'name': 'Shiping name 2'},
    ]

    return data