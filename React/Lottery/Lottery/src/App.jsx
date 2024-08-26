import "./App.css";
// import Lottery from "./Lottery";
import Form from "./Form";

function App() {
  // let winCondition = (ticket) => {
  // return sum(ticket) === 15;
  // return ticket[0] === 0;
  //   return ticket.every((num) => num === ticket[0]);
  // };

  return (
    <>
      <Form />
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      {/* <Lottery n={5} winningSum={20} /> */}
      {/* <Lottery n={7} winningSum={25} /> */}
    </>
  );
}

export default App;
