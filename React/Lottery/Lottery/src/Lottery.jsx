import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket.jsx";
import "./Lottery.css";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="Lottery">
      <h1>Lottery Game</h1>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
