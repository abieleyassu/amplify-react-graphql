import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Heading } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading level={2}>
        Heading Text
      </Heading>
      </header>
    </div>
  );
}

export default App;