import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant='h1'>This is the first test product that I have created on the AWS server</Typography>
      </header>
    </div>
  );
}

export default App;