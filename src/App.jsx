import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameGraphs from './Components/GameGraphs/GameGraphs';
import SearchBar from './Components/SearchBar/SearchBar';

let BASEURLS = 'https://localhost:7260/api/games';

function App() {
  const [gameData, setGameData] = useState([])
  const [searchGames, setSearchGames ] = useState({})
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

  const filterGames = (searchterm) =>{
     let matchingGames = games.filter((game) =>{
       if(game.name.toLowerCase().includes(searchterm.toLowerCase))

       return true

      else return false
     })

     setDisplayGames(matchingGames)
    };



  return (
    <>
      {gameData.length > 0 ? <GameGraphs data = {gameData}/> : null}
      <SearchBar filterGames={filterGames}/>
    </>
  );
}

export default App;
