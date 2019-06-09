// BASIC
/* var data = require('./data.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = data.greetText;
    return greet;
}; */



// ES6+REACT
import React, {Component} from 'react';
import data from './data.json';
import styles from './css/Greeter.css';

class Greeter extends Component {
    render() {
        return (
            <div className={styles.greeter}>
                {data.greetText}
            </div>
        );
    }
}

export default Greeter;