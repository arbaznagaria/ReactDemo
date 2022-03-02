import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function name(user){
  return user.firstname + ' ' + user.lastname;
}
var user = {
  firstname: "Arbaz",
  lastname: "Nagaria"
}
var element = <h1>Hello, {name(user)}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
