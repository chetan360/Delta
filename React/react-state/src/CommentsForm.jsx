import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          value={formData.username}
          id="username"
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks:</label>
        <textarea
          onChange={handleInputChange}
          value={formData.remarks}
          placeholder="remarks"
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          onChange={handleInputChange}
          value={formData.rating}
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
