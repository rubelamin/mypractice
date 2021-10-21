import React from 'react'
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';
import SecondHello from './components/SecondHello';

ReactDOM.render(<SayHello />, document.getElementById('app'));
ReactDOM.render(<SecondHello />, document.getElementById('app2'));