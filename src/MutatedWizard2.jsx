import React from 'react';
import RenderSpells from './RenderSpells'
// import RenderSpells from './RenderSpellsState'

const Wizard = ({ name = "not passed", school = "not passed" }) => {
  return (
    <RenderSpells>
      {
        (spells) => (
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
    </RenderSpells>
  )
}

export default Wizard;
