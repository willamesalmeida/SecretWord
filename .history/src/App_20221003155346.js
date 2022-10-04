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
import { WorldsList } from './data/words'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},

]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen/>}
      {gameStage === 'game' && <StartScreen/>}
      {gameStage === 'end' && <StartScreen/>}

    </div>
  );
}

export default App;
