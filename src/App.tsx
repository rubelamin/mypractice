import React from 'react'
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';
import SecondHello from './components/SecondHello';
import Allavatar from './components/Allavatar';
import SignIn from './components/SignIn';
import Badge from './components/Badge';

function App() {
    return ( <>
        <SayHello />
        
        <SecondHello/>
        <Allavatar/>
        <SignIn/>
        <Badge />

        </> )
  }

ReactDOM.render(<App />, document.getElementById('app'));

