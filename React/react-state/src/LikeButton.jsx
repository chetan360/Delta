import { useState } from "react";

export default function LikeButton() {
  let [isLicked, setIsLicked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLike = () => {
    setIsLicked(!isLicked);
    setClicks((clicks) => {
      return clicks + 1;
    });
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p>Clicks = {clicks}</p>
      <p onClick={toggleLike}>
        {isLicked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
