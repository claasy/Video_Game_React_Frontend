import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameGraphs from './Components/GameGraphs/GameGraphs';
import SearchBar from './Components/SearchBar/SearchBar';
import GameTable from './Components/GameTable/GameTable';
import EvalGraph from './Components/EvalGraph/EvalGraph';


let BASEURLS = 'https://localhost:7260/api/games';

function App() {
  const [gameData, setGameData] = useState([])
  const [searchedGames, setSearchGames ] = useState([])
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    getGameData();
  }, [])
  
  
  async function getGameData() {
    let response = await axios.get(BASEURLS)
    setGameData(response.data)
  }
  
  // async function getGameByConsole() {
  //   let response = await axios.get(BASEURLS + "/gamesByConsole")
  //   setGameByConsole(response.data)
  // };
 
    const filterGames = (searchterm) => {
     let matchingGames = gameData.filter((game) => game.name.toLowerCase().includes(searchterm.toLowerCase()))
     console.log (matchingGames)
     setSearchGames(matchingGames)
    };



  return (
    <> 
      <div>
        <SearchBar filterGames={filterGames} 
          />
        <GameTable searchedGames={searchedGames} setModal = {setModalShow} show={modalShow}
          onHide={() => setModalShow(false)}/>
      </div>
      <div>
        <p>
          Global Sales in the Millions by Console
        </p>
        {gameData.length > 0 ? <GameGraphs data = {gameData}/> : null}  
      </div>
      <div>
      {gameData.length > 0 ? <EvalGraph data = {gameData}/> : null}
      </div>
    </>
  );
}

export default App;
