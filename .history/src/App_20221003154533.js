//CSS
import "./App.css";
import "./Global.css";

//COMPONENTS
import StartScreen from "./components/StartScreen";

//HOOKS
import { useCallback, useEffect, useState } from 'react'

//DATA
import { WorldsList } from './data/words'

function App() {
  return (
    <div className="App">
      <StartScreen/>
    </div>
  );
}

export default App;
