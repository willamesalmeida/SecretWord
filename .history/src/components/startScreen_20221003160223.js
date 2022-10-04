import "./StartScreen.css";

const StartScreen = ({StartGame}) => {
  return (
    <div className="start">
        <h1>Secret World</h1>
        <p>Clique no botão abaixo para começar a jogar </p>
        <button onClick={StartScreen}>Começar o jogo</button>
    </div>
  )
};

export default StartScreen