import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Heading } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading level={2} fontWeight={tokens.fontWeights.thin}>
        Heading Text
      </Heading>
      </header>
    </div>
  );
}

export default App;