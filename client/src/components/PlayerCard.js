import React from "react";

const PlayerCard = (props) => {
  const { name, country } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{country}</p>
    </div>
  );
};

export default PlayerCard;
