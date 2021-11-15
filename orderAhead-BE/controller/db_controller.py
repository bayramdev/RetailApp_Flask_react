import csv
from .postgre_model import Postgres_DB

PROPERTIES_OF_TABLE = [
    {
        "table_name": "Inventory",
        "column_1": "Brand",
        "column_2": "Batch ID"
    },
    {
        "table_name": "Sales_Daily",
        "column_1": "Employee Name",
        "column_2": "Current Loyalty Points"
    },
    {
        "table_name": "Sales_by_item_Daily",
        "column_1": "Cost Per Item",
        "column_2": "Tax in Dollars"
    },
    {
        "table_name": "ftp_files",
        "column_1": "filename",
        "column_2": "insert_datetime"
    },
    {
        "table_name": "manager CDD",
        "column_1": "Closed Drawer Difference",
        "column_2": "Drawer Name"
    },
    {
        "table_name": "Card Expiration Report",
        "column_1": "Customer Source",
        "column_2": "Med ID Exp"
    },
    {
        "table_name": "Customers",
        "column_1": "Customer ID",
        "column_2": "Loyalty Member"
    },
    {
        "table_name": "Discounts_Daily",
        "column_1": "Discount Applied by",
        "column_2": "Receipt ID"
    },
    {
        "table_name": "Drawer_activities_Daily",
        "column_1": "Drawer Name",
        "column_2": "Drawer Total"
    },
    {
        "table_name": "Flower Tier Report",
        "column_1": "Price Profile Name",
        "column_2": "Strain Name"
    }
]


def get_table_list():
    table_list =  Postgres_DB.get_table_list()
    return table_list


def get_all_data_by_name(table_name):
    sql = f'SELECT * FROM "{table_name}";'
    return Postgres_DB.fetchall(sql)


def get_column_names_per_table(table_name):
    sql = f'SELECT * FROM "{table_name}" LIMIT 0;'
    return Postgres_DB.fetch_column_name(sql)


def get_table_name_from_csv(csv_file):
    with open(csv_file, 'r') as f:
        d_reader = csv.DictReader(f)

        # get fieldnames from DictReader object and store in list
        headers = d_reader.fieldnames

        if headers and len(headers) > 0:

            for table_name in PROPERTIES_OF_TABLE:
                check_1 = False
                check_2 = False
                for header in headers:
                    if table_name["column_1"] == header:
                        check_1 = True
                    if table_name["column_2"] == header:
                        check_2 = True

                if check_1 and check_2:
                    return table_name["table_name"]

        return ''


def write_multiple_line(csv_file, table_name):
    with open(csv_file, 'r') as f:

        # Get the Header
        d_reader = csv.DictReader(f)
        headers = d_reader.fieldnames

        # creating an object of csv reader
        # with the delimiter as
        csv_reader = csv.reader(f)

        sql = f'INSERT INTO "{table_name}" ('
        for inH_, header in enumerate(headers):
            if inH_ >= len(headers) - 1:
                sql += f'"{header}") VALUES '
            else:
                sql += f'"{header}", '

        # loop to iterate through the rows of csv
        for row in csv_reader:

            break_condition = False
            for id_, c in enumerate(row):
                if c != "":
                    break_condition = False
                    break
                if id_ >= len(row) - 1 and c == "":
                    break_condition = True
            if break_condition:
                break
            # adding the first row
            sql += f'('
            for idc_, column in enumerate(row):
                content = str(column).replace('\'', '\\''')
                if idc_ >= len(headers) - 1:
                    if content != "":
                        sql += f'\'{content}\' '
                    else:
                        sql += f'DEFAULT '
                else:
                    if content != "":
                        sql += f'\'{content}\', '
                    else:
                        sql += f'DEFAULT, '

            sql += f'),'

        Postgres_DB.copy_csv(sql[:-1] + f';')

        return headers
