import React from 'react';

const Navbar = props => {
  const { selectCritters } = props;
  return (
    <div id="nav">
      <button id="dogs" onClick={() => selectCritters('dogs')}>Dogs</button>
      <button id="cats" onClick={() => selectCritters('cats')}>Cats</button>
      <button id="dragons" onClick={() => selectCritters('dragons')}>Dragons</button>
    </div>
  );
};

export default Navbar;
