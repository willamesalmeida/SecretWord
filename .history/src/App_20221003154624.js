//CSS
import "./App.css";
import "./Global.css";

//COMPONENTS
import StartScreen from "./components/StartScreen";

//HOOKS
import { useCallback, useEffect, useState } from 'react'

//DATA
import { WorldsList } from './data/words'

const stages = [
  {id: 1, name: "start"}
]
function App() {
  return (
    <div className="App">
      <StartScreen/>
    </div>
  );
}

export default App;
