#!/usr/bin/python3.8
# -*- coding: utf-8 -*-
# @Time    : 2024/11/26 13:21
# @Author  : Yu
# @Email   : lanyucitrus1026@163.com
# @File    : app.py
# @Software: PyCharm


from flask import Flask, render_template, jsonify, session
import yaml
from flask import redirect
from flask import url_for
from flask import request

# from flask_cors import CORS
# from flask_session import Session
# 获取配置文件
f = open('../config.yaml', "rb")
config = yaml.safe_load(f)
f.close()
port = config.get("port")
app = Flask(__name__)


@app.route('/train_start', methods=['GET', 'POST'])
def train_start():  # put application's code here
    lr = request.form.get('lr')
    bs = request.form.get('bs')
    cuda = request.form.get('cuda')
    nn = request.form.get('nn')
    return 'hello world'


@app.route('/')
def index():
    return 'hello world'


if __name__ == '__main__':
    app.run(port=port, debug=False, threaded=False)
