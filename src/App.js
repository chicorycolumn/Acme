import "./App.css";
import words from "./level1/level2/level3/words.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {words.map((w) => (
          <p style={{ color: w.colour }}>{w.lemma}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
