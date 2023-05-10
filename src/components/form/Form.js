import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setImg(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  const formDataHandler = (event) => {
    event.preventDefault();

    props.addProduct({ name, img, desc, price });
    setImg("");
    setName("");
    setPrice("");
    setDesc("");
  };

  return (
    <form onSubmit={formDataHandler} className="form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          placeholder="Product Name"
          value={name}
        />
      </div>
      <div>
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          id="price"
          onChange={priceChangeHandler}
          placeholder="Price"
          value={price}
        />
      </div>
      <div>
        <label htmlFor="img">Image Url</label>
        <input
          type="text"
          id="img"
          onChange={imgChangeHandler}
          placeholder="Image Url"
          value={img}
        />
      </div>
      <div>
        <label htmlFor="desc">Desc</label>
        <input
          type="text"
          id="desc"
          onChange={descChangeHandler}
          placeholder="Description"
          value={desc}
        />
      </div>
      <button>Create</button>
    </form>
  );
}

export default Form;
