import { useEffect, useState } from "react";

export default function Jocks() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJock = async () => {
    let respone = await fetch(URL);
    let jesonResponse = await respone.json();
    setJock({ setup: jesonResponse.setup, punchline: jesonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJock() {
      let respone = await fetch(URL);
      let jesonResponse = await respone.json();
      setJock({
        setup: jesonResponse.setup,
        punchline: jesonResponse.punchline,
      });
    }

    getFirstJock();
  }, []);

  let [jock, setJock] = useState(getNewJock);

  return (
    <div>
      <h3>Jock</h3>
      <h2>{jock.setup}</h2>
      <h2>{jock.punchline}</h2>
      <button onClick={getNewJock}>New Jock</button>
    </div>
  );
}
