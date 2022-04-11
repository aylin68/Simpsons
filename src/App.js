import axios from "axios";
import React, { useState } from "react";
import QuoteCard from "./components/QuoteCard.js";
import "./App.css";

function App() {
  const [simpsons, setSimpsons] = useState(
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.data)
      .then((data) => data[0])
  );
  const [value, setValue] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setValue(!value);
  };
  return (
    <div className="App">
      <QuoteCard value={value} simpsons={simpsons} handleClick={handleClick} />
    </div>
  );
}

export default App;
