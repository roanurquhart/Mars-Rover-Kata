import React from 'react';
import KataTitleText, { MarsRover } from './Domain/KataPage'
import './App.css';
import Rover from './Domain/Rover';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" id='7'>
        <KataTitleText/>
        <MarsRover/>
      </header>
    </div>
  );
}

export default App;
