import React from "react";
// TO DO: Create a FactsList functional component which maps through all of the animal facts in data.jsx and returns each item as a Fact component

const FactsList = ({ facts, handleFavoriteClick }) => (
  <div className="factsList">
    {facts.map((item) => (
      <Fact
        fact={item}
        key={item.id}
        handleFavoriteClick={handleFavoriteClick}
      />
    ))}
  </div>
);

export default FactsList;
