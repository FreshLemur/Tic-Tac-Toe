import { useEffect, useState } from "react";
import "./App.css";
import OSVG from "./OSVG";
import XSVG from "./XSVG";

export default function App() {
  const [ticTacToeCounter, setTicTacToeCounter] = useState(1);
  const [xWinCounter, setXWinCounter] = useState(0);
  const [oWinCounter, setOWinCounter] = useState(0);
  const [grid, setGrid] = useState(Array(9).fill(null));

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const endGame = () => {
    // Check for winner
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        alert(`${grid[a]} WIN`);
        grid[a] === "X"
          ? setXWinCounter(xWinCounter + 1)
          : setOWinCounter(oWinCounter + 1);
        resetGame();
        return;
      }
    }

    // Check for draw
    if (ticTacToeCounter === 10) {
      alert("DRAW");
      resetGame();
    }
  };

  const resetGame = () => {
    setTicTacToeCounter(1);
    setGrid(Array(9).fill(null));
  };

  const handleClick = (index: number) => {
    if (grid[index]) return;
    const newGrid = [...grid];
    newGrid[index] = ticTacToeCounter % 2 === 0 ? "O" : "X";
    setGrid(newGrid);
    setTicTacToeCounter(ticTacToeCounter + 1);
  };

  useEffect(() => {
    endGame();
  }, [grid]);

  return (
    <div className="App">
      <h1 className="NumberOfXWins">
        Number of ✖️ wins
        <br />
        ⬇️
        <br />
        <span>{xWinCounter}</span>
      </h1>
      <div className="mainContainer">
        <section>
          {[0, 3, 6].map((index) => (
            <div
              className={`container container-${index}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {grid[index] === "X" ? (
                <XSVG />
              ) : grid[index] === "O" ? (
                <OSVG />
              ) : null}
            </div>
          ))}
        </section>

        <section>
          {[1, 4, 7].map((index) => (
            <div
              className={`container container-${index}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {grid[index] === "X" ? (
                <XSVG />
              ) : grid[index] === "O" ? (
                <OSVG />
              ) : null}
            </div>
          ))}
        </section>
        <section>
          {[2, 5, 8].map((index) => (
            <div
              className={`container container-${index}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {grid[index] === "X" ? (
                <XSVG />
              ) : grid[index] === "O" ? (
                <OSVG />
              ) : null}
            </div>
          ))}
        </section>
      </div>
      <h1 className="NumberOfOWins">
        Number of ⭕ wins
        <br />
        ⬇️
        <br />
        <span>{oWinCounter}</span>
      </h1>
    </div>
  );
}
