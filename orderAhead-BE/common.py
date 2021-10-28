from passlib.hash import pbkdf2_sha256 as sha256


def generate_hash(password):
    return sha256.hash(password)


def verify_hash(password, hash_):
    return sha256.verify(password, hash_)


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d
