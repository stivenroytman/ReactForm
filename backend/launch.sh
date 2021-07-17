#!/bin/sh

SYSPYTHON=$(which python)
[ -z $SYSPYTHON ] && { echo "Python must be installed."; exit; }

PYTHON='env/bin/python'
PIP='env/bin/pip'

if [ ! -d env ]; then
	echo "Setting up virtual environment for first run."
	$SYSPYTHON -m venv env
	$PIP install --upgrade pip setuptools wheel
	$PIP install -r requirements.txt
fi

$PYTHON server.py
