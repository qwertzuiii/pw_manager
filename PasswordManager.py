import os
import logicpw as lpw
import webbrowser

openWeb=True

from flask import Flask, render_template, request
app = Flask(__name__, template_folder='', static_folder='')

htmlp = 'html/'

@app.route('/')
def main_index():
    return render_template(htmlp + "index.html")

@app.route('/startup')
def startup():
    return render_template(htmlp + "startup.html")

@app.route('/accounts')
def another_index():
    users, pws, count = lpw.view()
    print(users, pws, count)
    return render_template(htmlp + "home.html", users=users, pws=pws, count=count)

@app.route('/accounts/delete')
def delete():
    lpw.seetxt()
    return render_template(htmlp + 'delete.html')


@app.route('/accounts/add')
def add():
    return render_template(htmlp + 'add.html')

@app.route('/accounts/completing', methods=['POST'])
def accountscompleting():
    username = request.form['getusername']
    password = request.form['getpassword']
    #print(username, password)

    lpw.add(username, password)
    return render_template(htmlp + 'processing.html')


# @app.route('/files/favicon.ico')
# def fav():
#     return send_from_directory(os.path.join(app.root_path, 'static'),'files/favicon.ico')
    
if __name__ == '__main__':
    if openWeb:
        webbrowser.open_new_tab('http://127.0.0.1:5000/startup')
    app.run()