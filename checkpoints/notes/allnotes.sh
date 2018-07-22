#!/bin/bash
#
# menu: A simple menu template
#
y="\e[01;33m"
b="\e[00;34m"
r="\e[01;31m"
o="\e[00m"
while true
do
  clear
  echo -n "" # is this line necessary?
  read response
  case $response in
    "boilerplate")
          echo 'recognised boilerplate cmd'
        ;;
    "syntax")
          echo 'recognised syntax cmd'
        ;;
    "help")
        echo -e "cmd: help\n  display help page\n  optns: none\ncmd: boilerplate\n  boilerplate code for js frameworks\n  optns: -s sequelize -x express -r react\ncmd: syntax\n  syntax for js frameworks\n  optns: -s sequelize -x express -r react\ncmd: exit\n  exit notes script\n  optns: none"
        ;;
    "exit") exit 0
        ;;
    *)  echo -e "notes.sh: command not found\n'help' for options"
        ;;
  esac
  echo -n "press enter to coax the shell onwards..."
  read response
done
