import React, { useState } from "react";

const Testone = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [text, setText] = useState("");
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "" && size !== null && color !== "") {
      setIsSubmitted(true);
    }
  };
  return (
    <div>
      <h1>Testone</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter a Text"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <select
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          id="color"
        >
          <option active="true" disabled value="">
            N/A
          </option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <br />
        <select
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          id="size"
        >
          <option active="true"  disabled value="">
            N/A
          </option>
          <option value="24">24</option>
          <option value="32">32</option>
          <option value="48">48</option>
          <option value="72">72</option>
          <option value="100">100</option>
        </select>
        <br />
        <button type="submit">Submit text</button>
      </form>
      <div>
        {isSubmitted && (
        <p style={{ fontSize: `${size}px`, color: color }}>{text}</p>
         )} 
      </div>
    </div>
  );
};

export default Testone;
