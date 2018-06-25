import React from 'react';

const Critters = props => {
  return (
    <div id="critters">
    <h1>{props.title}</h1>
      {
        props.critters.map(critter => {
          return (
            <div key={critter.name}>
              <h2>{critter.name}</h2>
              <img src={critter.image} />
            </div>
          );
        })
      }
    </div>
  );
};

export default Critters;
