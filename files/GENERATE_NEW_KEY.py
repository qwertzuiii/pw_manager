from cryptography.fernet import Fernet
filekey = 'NEW_KEY.key'
key = Fernet.generate_key()

open(filekey, 'wb').write(key)