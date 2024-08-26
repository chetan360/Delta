import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [search, setSearch] = useState("");

  let handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <div className="container">
      <div className="searchbox">
        <h1>How can we help?</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              value={search}
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
            <button>
              <ArrowForwardIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
