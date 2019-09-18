import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/index.js';

window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById('app'));
}
