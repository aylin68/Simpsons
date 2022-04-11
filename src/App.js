import axios from "axios";
import React, { useState } from "react";
import QuoteCard from "./components/QuoteCard.js";
import "./App.css";

function App() {
  const [simpsons, setSimpsons] = useState([]);
  const [gotData, setGotData] = useState(false);

  const fetchData = (e) => {
    e.preventDefault();
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.data)
      .then((data) => {
        setSimpsons(data[0]);
        setGotData(true);
      });
  };
  return (
    <div className="App">
      <QuoteCard
        gotData={gotData}
        simpsons={simpsons}
        handleClick={fetchData}
      />
    </div>
  );
}

export default App;
