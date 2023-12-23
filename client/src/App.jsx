import React, { useEffect, useState } from "react";
import { gameSubject, initGame, resetGame } from "./chess/Game";
import Board from "./chess/Board";
import "./App.css";

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();

  useEffect(() => {
    localStorage.setItem("time", 0);
    localStorage.setItem("pos", 0);
    localStorage.setItem("depth", 3);
    localStorage.setItem("alg", "a");
    localStorage.setItem("hist", JSON.stringify([])); 
    initGame(); 
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
      setTurn(game.turn);
    });
    return () => subscribe.unsubscribe();
  }, []);

  const depthHandler = (e) => {
    console.log(e.target.id);
    localStorage.setItem("depth", e.target.id);
  };

  const algHandler = (e) => {
    console.log(e.target.id);
    localStorage.setItem("alg", e.target.id);
  };

  return (
    <div className="container">
      <div className="flex-container">
        <div className="menu">
          <div className="menu-container">
            <div className="list">
              <h4>Глубина(за замовчуванням 3)</h4>
              <div>
                <input
                  type="radio"
                  id="1"
                  name="depth"
                  onClick={depthHandler}
                />{" "}
                1
              </div>
              <div>
                <input
                  type="radio"
                  id="2"
                  name="depth"
                  onClick={depthHandler}
                />{" "}
                2
              </div>
              <div>
                <input
                  type="radio"
                  id="3"
                  name="depth"
                  onClick={depthHandler}
                />{" "}
                3
              </div>
              <div>
                <input
                  type="radio"
                  id="4"
                  name="depth"
                  onClick={depthHandler}
                />{" "}
                4
              </div>
            </div>
            <div className="list">
              <h4>алгоритм(за замовчуванням з альфа-бета відсіченням)</h4>
              <div>
                <input type="radio" id="a" name="alg" onClick={algHandler} /> з
                альфа-бета відсіченням
              </div>
              <div>
                <input type="radio" id="n" name="alg" onClick={algHandler} />{" "}
                без альфа-бета відсічення
              </div>
            </div>
            <div>час: {localStorage.getItem("time")} ms</div>
            <div>пораховано позицій: {localStorage.getItem("pos")}</div>
            {JSON.parse(localStorage.getItem("hist")) && <p>Історія ходів:  {JSON.parse(localStorage.getItem("hist"))}</p>}
            {result && <p>{result}</p>}            
            {isGameOver && (
              <button onClick={resetGame} className="btn">
                <span>Нова гра</span>
              </button>
            )}
          </div>
        </div>
        <div className="board-container">
          <Board board={board} turn={turn} />
        </div>
      </div>
    </div>
  );
}

export default App;
