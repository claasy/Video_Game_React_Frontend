import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameGraphs from './Components/GameGraphs/GameGraphs';

let BASEURLS = 'https://localhost:7260/api/games';

function App() {
  const [gameData, setGameData] = useState([])

  useEffect(() => {
    getGameData();
  }, [])
  
  async function getGameData() {
    let response = await axios.get(BASEURLS)
    console.log(response);
    setGameData(response.data)
  }








  return (
    <div>
      Hello World
      <GameGraphs data = {gameData}/>
    </div>
  );
}

export default App;
