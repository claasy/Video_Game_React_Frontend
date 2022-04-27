import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameGraphs from './Components/GameGraphs/GameGraphs';

let BASEURLS = 'https://localhost:7260/api/games';

function App() {
  const [gameData, setGameData] = useState([])
  const [gameByConsole, setGameByConsole] = useState({})
  useEffect(() => {
    getGameData();
  }, [])
  
  
  async function getGameData() {
    let response = await axios.get(BASEURLS)
    console.log(response.data);
    setGameData(response.data)
  }
  
  async function getGameByConsole() {
    let response = await axios.get(BASEURLS + "/gamesByConsole")
    setGameByConsole(response.data)
  };


  return (
    <div>
    {gameData.length > 0 ? <GameGraphs data = {gameData}/> : null}
      
    </div>
  );
}

export default App;
