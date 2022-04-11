import React from "react";

const QuoteCard = (props) => {
  const { value, simpsons, handleClick } = props;
  return (
    <>
      <button onClick={handleClick}>quote</button>
      {value ? (
        <div>
          <h1>{simpsons.character}</h1>
          <img src={simpsons.image} />
          <p>{simpsons.quote}</p>
        </div>
      ) : (
        "nothing"
      )}
    </>
  );
};
export default QuoteCard;
