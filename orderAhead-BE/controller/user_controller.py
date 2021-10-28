import sqlite3
import os
import common

db_name = os.getenv('DB_NAME', 'order.db')


def getUserByEmail(email):
    query = 'SELECT id, email, password, username, first_name, last_name, is_superuser, is_active, mfa FROM users WHERE'
    to_filter = []

    if email:
        query += ' email=? AND'
        to_filter.append(email)

    query = query[:-4] + ';'

    db_path = os.path.join('db', db_name)
    conn = sqlite3.connect(db_path)
    conn.row_factory = common.dict_factory
    cur = conn.cursor()

    return cur.execute(query, to_filter).fetchone()


def saveUserByUsernameAndEmailAndPassword(userName, email, password):
    # Save the data in db
    db_path = os.path.join('db', db_name)
    conn = sqlite3.connect(db_path)
    query = f'INSERT INTO users (username, email, password) \
                  VALUES ("{userName}", "{email}", "{common.generate_hash(password)}");'

    cur = conn.cursor()
    cur.execute(query)
    conn.commit()


def getUserById(id):
    query = 'SELECT id, first_name, last_name, is_active, is_superuser, role, email, phone_number, username, mfa FROM users WHERE'
    to_filter = []

    if id:
        query += ' id=? AND'
        to_filter.append(id)

    query = query[:-4] + ';'

    db_path = os.path.join('db', db_name)
    conn = sqlite3.connect(db_path)
    conn.row_factory = common.dict_factory
    cur = conn.cursor()

    return cur.execute(query, to_filter).fetchone()


def getAllUsers():
    db_path = os.path.join('db', db_name)
    conn = sqlite3.connect(db_path)
    conn.row_factory = common.dict_factory
    cur = conn.cursor()
    return cur.execute(
        'SELECT first_name, last_name, username, email, is_active, is_superuser, id, role FROM users;').fetchall()


def updateNameAndPhoneById(first_name, last_name, phone_number, id):
    db_path = os.path.join('db', db_name)
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("update users set first_name=?, last_name=?, phone_number=? where id=?",
                (first_name, last_name, phone_number, id,))
    conn.commit()


def updateVerificatonCOdeById(verif_code, id):
    db_path = os.path.join('db', db_name)
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("update users set verif_code=? where id=?",
                (verif_code, id,))
    conn.commit()


def updateMFAById(mfa, id):
    db_path = os.path.join('db', db_name)
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("update users set mfa=? where id=?", (mfa, id,))
    conn.commit()
