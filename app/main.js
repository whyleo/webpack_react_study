// BASIC
/* const greeter = require('./Greeter.js');
document.querySelector('#root').appendChild(greeter()); */



// ES6+REACT
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './css/common.css';

render(<Greeter />, document.getElementById('root'));