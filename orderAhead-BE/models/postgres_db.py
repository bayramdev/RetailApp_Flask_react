import psycopg2

class PostgresDB:
  conn = None

  def connect(self):
    self.conn = psycopg2.connect(
      host="52.191.3.0",
      database="web_db",
      user="postgres",
      password="N^cfZkujmn3dIjMjVHd")

  def close(self):
    if self.conn is not None:
      self.conn.close()

  def fetchone(self, sql):
    cur = self.conn.cursor()
    cur.execute(sql)
    result = cur.fetchone()
    cur.close()

    return result

  def iter_row(self, cursor, size=10):
    while True:
        rows = cursor.fetchmany(size)
        if not rows:
            break
        for row in rows:
            yield row

  def fetchall(self, sql):
    cur = self.conn.cursor()
    cur.execute(sql)
    result = cur.fetchone()

    result = []
    for row in self.iter_row(cur, 10):
      result.append(row)

    cur.close()

    return result
