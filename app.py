from flask import Flask, render_template, request, redirect, url_for, flash, jsonify

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def corner():
   return render_template('corner.html')


if __name__ == '__main__':
   app.run(debug = True)