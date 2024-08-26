function printHello(event) {
  console.log("Hello!");
  console.log(event);
}

function printBye() {
  console.log("Bye!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Me!</button>
      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, odio
        placeat error, mollitia corporis eveniet, inventore voluptates quam
        doloremque laudantium tenetur aliquid iure atque voluptatibus facere
        aspernatur numquam commodi asperiores.
      </p>
    </div>
  );
}
