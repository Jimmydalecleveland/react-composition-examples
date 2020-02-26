import React from 'react';
import withSpells from './withSpells'

const Wizard = ({ name = "not passed", school = "not passed", spells = ["no spells"] }) => {
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

export default withSpells(Wizard);
