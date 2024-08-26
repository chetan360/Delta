import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });
  let [arr, setArr] = useState("no moves.");

  let updateBlue = () => {
    // setMoves((prevMoves) => {
    //   return { ...prevMoves, blue: prevMoves.blue + 1 };
    // });

    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
  };
  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue Moves = {moves.blue}</p>
        <button
          onClick={updateBlue}
          style={{ backgroundColor: "blue", color: "white", fontWeight: 500 }}
        >
          +1
        </button>
        <p>Yellow Moves = {moves.yellow} </p>
        <button
          onClick={updateYellow}
          style={{ backgroundColor: "yellow", color: "black", fontWeight: 500 }}
        >
          +1
        </button>
        <p>Green Moves = {moves.green} </p>
        <button
          onClick={updateGreen}
          style={{ backgroundColor: "green", color: "white", fontWeight: 500 }}
        >
          +1
        </button>
        <p>Red Moves = {moves.red} </p>
        <button
          onClick={updateRed}
          style={{ backgroundColor: "red", color: "white", fontWeight: 500 }}
        >
          +1
        </button>
      </div>
    </div>
  );
}
