from passlib.hash import pbkdf2_sha256 as sha256
from random import randint
import urllib
from slugify import slugify
import json


def generate_hash(password):
    return sha256.hash(password)


def verify_hash(password, hash_):
    return sha256.verify(password, hash_)


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def get_verification_code():
    return randint(1000000, 9999999)

def sanitize_title(text):
    # return urllib.parse.quote(text, safe='')
    return text

def sanitize_handle(text):
    return slugify(text)

def fix_quote(text):
    return json.dumps(text)