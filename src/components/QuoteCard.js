import React from "react";

const QuoteCard = (props) => {
  const { gotData, simpsons, handleClick } = props;
  return (
    <>
      <button onClick={handleClick}>Get Data</button>
      {gotData ? (
        <div>
          <h1>{simpsons.character}</h1>
          <img src={simpsons.image} />
          <p>{simpsons.quote}</p>
        </div>
      ) : null}
    </>
  );
};
export default QuoteCard;

