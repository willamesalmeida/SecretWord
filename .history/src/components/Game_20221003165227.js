import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
<div className="game">
  <p className="points">
    <span>Pontuação: 800</span>
  </p>
  <h1>Advinhe a palavra:</h1>
  <h3 className="tip">
    Dica sobre a palavra: <span>Dica...</span>
  </h3>
  <div className="wordContainer">
    <span className="letter">A</span>
    <span className="blackSquare"></span>
  </div>
  <div className="letterContainer">
    <p>Tente adivinha uma letra da palavra</p>
    <form>
      <input type="text" name="letter" maxLength="1" required />
    </form>
  </div>
</div>
  );
};

export default Game;
