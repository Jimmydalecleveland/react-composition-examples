import React from 'react';
import useSpells from './useSpells'
// import useSpells from './useSpellsState'

const Wizard = ({ name = "not passed", school = "not passed" }) => {
  const { spells, loading } = useSpells()

  if (loading) return <h1>Loading . . .</h1>
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
