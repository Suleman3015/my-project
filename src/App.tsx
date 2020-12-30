import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MissionContainer } from './components/mission';
import  MissionInfoContainer from './components/missionInfo'

function App() {
  return (
    <div className="App">
     <MissionContainer/>
     < MissionInfoContainer/>
    </div>
  );
}

export default App;
