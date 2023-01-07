import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        navigate(`/products/${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Product Manager</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </p>
        <input type="submit" value="Create" />
      </form>
    </>
  );
};
