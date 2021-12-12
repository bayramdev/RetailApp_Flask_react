from models.active_record import ActiveRecord

class OrderCustomer(ActiveRecord):
  table_name = "Customers"
  primary_key = "Customer ID"
  allow_fields = {
    'customer_name': 'Customer Name',
    'birth_date': 'Birth Date',
    'customer_type': 'Customer Type',
    'customer_med_id': 'Customer Med ID',
    'med_id_exp': 'Med ID Exp',
    'loyalty_member': 'Loyalty Member',
    'current_loyalty_points': 'Current Loyalty Points',
    'loyalty_points_in_dollars': 'Loyalty Points in Dollars',
    'state': 'State',
    'address_1': 'Address 1',
    'address_2': 'Address 2',
    'city': 'City',
    'zip': 'Zip',
    'phone_number': 'Phone Number',
    'customer_notes': 'Customer Notes',
    'created_on': 'Created On',
    'last_purchase_date': 'Last Purchase Date',
    'current_date': 'Current Date',
  }