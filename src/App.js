import "./App.css";
import React, { Component } from "react";
import words from "./level1/level2/level3/words.json";
import input from "./data/input.json";

const addSigma = (s) => {
  if ("y".includes(s[s.length - 1])) {
    return s.slice(0, s.length - 1) + "ies";
  }
  if ("abcdefgiklmnoprtuw".includes(s[s.length - 1])) {
    return s + "s";
  }
  return s + "es";
};

class App extends Component {
  state = {
    index: 0,
    inflections: {},
    result: [],
  };

  render() {
    let currentLemma = input[this.state.index].lemma;

    if (!Object.keys(this.state.inflections).length) {
      let inf = {};
      inf.plural = addSigma(currentLemma);
      inf.possess = currentLemma + "'s";
      inf.plurPoss = addSigma(currentLemma) + "'";
      this.setState({ inflections: inf });
    }

    return (
      <div>
        <h1>NOUNS</h1>
        <h1>
          {this.state.index} - {currentLemma}
        </h1>
        {Object.keys(this.state.inflections).map((k) => (
          <h2 key={`inflections-${k}`}>
            <span>{`${k}: `}</span>
            <span>{this.state.inflections[k]}</span>
          </h2>
        ))}

        <button
          onClick={(e) => {
            this.setState((prevState) => {
              return {
                index: prevState.index + 1,
                result: [
                  ...prevState.result,
                  Object.keys(prevState.inflections)
                    .sort()
                    .map((k) => prevState.inflections[k])
                    .join("  "),
                ],
                inflections: [],
              };
            });
          }}
        >
          NEXT
        </button>
        <br></br>
        <textarea value={this.state.result.join("\n")} />
      </div>
    );
  }
}

export default App;

// <header className="App-header">
//   {words.map((w) => (
//     <p style={{ color: w.colour }}>{w.lemma}</p>
//   ))}
// </header>
