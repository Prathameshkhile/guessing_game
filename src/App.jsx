import { useEffect, useState } from "react";
import init, { Game } from "./rust-guessing/pkg/rust_guessing.js";

function App() {
  const [game, setGame] = useState(null);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    init().then(() => {
      const g = new Game();
      setGame(g);
    });
  }, []);

  const handleGuess = () => {
    if (!game) return;
    const res = game.check_guess(parseInt(guess));
    setResult(res);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Guess the Number (WASM)</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
