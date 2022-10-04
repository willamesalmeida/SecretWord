//CSS
import "./App.css";
import "./Global.css";

//COMPONENTS
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//HOOKS
import { useCallback, useEffect, useState } from 'react'

//DATA
import { wordsList } from './data/words'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},

]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const[pickedWrold, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] =useState("")
  const [letters, setLetters] = useState([])

//start secret world game
 const startGame = () => {



  setGameStage(stages[1].name);

 };

 //process the letter input
const verifyLetter = () => {
  setGameStage(stages[2].name)
}
//restart the game
const retry = () => {
setGameStage(stages[0].name)

}
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}

    </div>
  );
}

export default App;
