import flask
from flask import Flask, request

app = Flask("server")

@app.route("/", methods=["GET"])
def repeatPlease():
    resp = flask.Response("hello worl")
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp


app.run(host="127.0.0.1", port=8080)