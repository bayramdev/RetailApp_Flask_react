from config import app
from models.user import User

@app.route("/test", methods=["GET"])
def test():
  print('ddddddddddddddddddddddddddddd')
  print(__name__)

  user = User(1)

  print('user.first_name')
  print(user.first_name)
  # print('user.data')
  print(user.id)
  user.first_name = 'Mr. Hao'
  user.save()

  return 'hello'