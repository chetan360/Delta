import "./Card.css";

export default function Card({ heading, info }) {
  return (
    <div className="card">
      <h3> {heading}</h3>
      <hr />
      <p>{info}</p>
    </div>
  );
}
