import React from 'react'
import { hot } from 'react-hot-loader/root'

import Wizard from './Wizard'
import RenderSpells from './RenderSpellsState'
import useSpells from './useSpellsState'


const App = () => { 
  const { loading, spells: hookSpells } = useSpells()

  return (
    <section>
      <h1>The Pure</h1>
      <br />

      <h1>First Wizard (HOC)</h1>
      <p>Cannot keep Wizard separated from HOC</p>
      <hr />

      <h1>Second Wizard (RP)</h1>
      <Wizard name="Kanedias" school="Illusion">
        <p>Wizard's spells:</p>
        <RenderSpells>
          {
            (spells) => (
              <ul>
                {spells.map(spell => <li key={spell}>{spell}</li>)}
              </ul>
            )
          }
        </RenderSpells>
      </Wizard>
      <hr />

      <h1>Third Wizard (H)</h1>
      {loading ?
        <h1>Loading . . .</h1>
        :
        <Wizard name="Bayaz" school="Evocation">
          <ul>
            {hookSpells.map(spell => <li key={spell}>{spell}</li>)}
          </ul>
        </Wizard>
      }
    </section>
  )
 }

export default hot(App);
