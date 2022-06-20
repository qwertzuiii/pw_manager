'''
For HTML website! (Flask)
'''

import os
from cryptography.fernet import Fernet
pwfile='files/pws.txt'
keyfile='files/.key'

def load_key():
    return open(keyfile, "rb").read()

crkey = load_key()
fer = Fernet(crkey)

def seetxt():
    path = os.getcwd() + pwfile
    import subprocess
    subprocess.Popen('notepad "%s"' % pwfile)
    #os.system('notepad "%s"' % path)
    print('TXT')

def get_new_key():
    key = Fernet.generate_key()
    open(keyfile, 'wb').write(key)

def add(username, pwd):
    with open(pwfile, 'a') as f:
        f.write(username + '|' + fer.encrypt(pwd.encode()).decode() + '\n')

def view():
    if os.path.exists(pwfile):
        with open(pwfile, 'r') as f:
            account_names = []
            account_pws = []
            number_of_users = 0
            for line in f.readlines():
                data = line.rstrip()
                user, passw = data.split("|")

                account_names += [user]
                account_pws += [fer.decrypt(passw.encode()).decode()]

                number_of_users += 1
    else: return 'NO ACCOUNTS', '', 0

    return account_names, account_pws, number_of_users
