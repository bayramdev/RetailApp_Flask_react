import psycopg2

params = {
  'host': "52.191.3.0",
  'database': "web_db",
  'user': "postgres",
  'password': "N^cfZkujmn3dIjMjVHd"
}
class Postgres_DB:
  @classmethod
  def connect(self):
    conn = psycopg2.connect(host=params['host'], database=params['database'], user=params['user'], password=params['password'])
    return conn

  @classmethod
  def fetchone(self, sql, mapping = None):
    conn = self.connect()
    cur = conn.cursor()
    cur.execute(sql)
    result = cur.fetchone()
    cur.close()
    conn.close()

    return self.build_object(result, mapping)

  @classmethod
  def iter_row(self, cursor, size=10):
    while True:
        rows = cursor.fetchmany(size)
        if not rows:
            break
        for row in rows:
            yield row

  @classmethod
  def fetchall(self, sql, mapping = None):
    conn = self.connect()
    cur = conn.cursor()
    cur.execute(sql)

    result = []
    for row in self.iter_row(cur):
      obj = self.build_object(row, mapping)
      result.append(obj)

    cur.close()
    conn.close()

    return result

  @classmethod
  def build_object(self, row, mapping):
    if mapping == None:
      return row

    return mapping(row)

    # keys = mapping.keys()
    # values = mapping.values()