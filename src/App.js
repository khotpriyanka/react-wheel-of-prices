import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import "./styles.css";

export default function App() {
  const [winner, setWinner] = useState();

  const wheelChoices = [
    "Amazon voucher",
    "Won 70",
    "Won 10",
    "Won 2",
    "Won uber pass",
    "JACKPOT",
    "Won a voucher"
  ];

  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000"
  ];

  const randomOptionPicker = () => {
    return wheelChoices[Math.floor(Math.random() * wheelChoices.length)];
  };

  return (
    <div className="App">
      <h2>
        {winner &&
          (winner !== "JACKPOT" ? `You got ${winner}` : `Wohooo you win`)}
      </h2>
      <WheelComponent
        segments={wheelChoices}
        segColors={segColors}
        winningSegment={randomOptionPicker()}
        onFinished={(winner) => setWinner(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={1000}
        fontFamily="Arial"
      />
    </div>
  );
}
