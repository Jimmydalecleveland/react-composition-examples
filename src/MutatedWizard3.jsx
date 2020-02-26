import React from 'react';
import useSpells from './useSpells'

const Wizard = ({ name = "not passed", school = "not passed" }) => {
  const spells = useSpells()
  return (
    <div>
      <h3>Wizard's name: {name}.</h3>
      <h3>Wizard's school of magic: {school}</h3>
      <p>Wizard's spells:</p>
      <ul>
        {spells.map(spell => <li key={spell}>{spell}</li>)}
      </ul>
    </div>
  )
}

export default Wizard;
