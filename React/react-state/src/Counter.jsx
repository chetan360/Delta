import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  console.log("re-rendered!");

  function incCountx() {
    setCountx(countx + 1);
  }
  function incCounty() {
    setCounty(county + 1);
  }

  useEffect(
    function print() {
      console.log("This is side effect!");
    },
    [countx]
  );

  return (
    <div>
      <h3>Count = {countx}</h3>
      <button onClick={incCountx}>Increase Count</button>
      <h3>Count = {county}</h3>
      <button onClick={incCounty}>Increase Count</button>
    </div>
  );
}
