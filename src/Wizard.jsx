import React from 'react';

const Wizard = ({ name = "not passed", school = "not passed", children }) => {
  return (
    <div>
      <h3>Wizard's name: {name}.</h3>
      <h3>Wizard's school of magic: {school}</h3>
      {children}
    </div>
  )
}

export default Wizard