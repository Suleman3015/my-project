import React, { useState, useCallback } from 'react';
import './App.css';
import { MissionContainer } from './components/mission';
import MissionInfoContainer from './components/missionInfo'
import Navbar from './components/ui/navbar'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
function App() {
  const [id, setId] = useState(1);
  const handleIdChange = useCallback(newId => {
    setId(newId)
  }, [])
  return (
    <div className="App">

      <Navbar />

      <MissionContainer handleIdChange={handleIdChange} />
      < MissionInfoContainer id={id} />

      {/* <Footer /> */}

    </div>
  );
}

export default App;
