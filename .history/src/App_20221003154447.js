//CSS
import "./App.css";
import "./Global.css";

//COMPONENTS
import StartScreen from "./components/StartScreen";

//HOOKS
import { usecallback, useEffect, useState } from 'react'

//DATA


function App() {
  return (
    <div className="App">
      <StartScreen/>
    </div>
  );
}

export default App;
