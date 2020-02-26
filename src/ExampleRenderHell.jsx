import React from 'react'
import { hot } from 'react-hot-loader/root'

import Wizard from './Wizard'
import RenderLevel1 from './RenderLevel1'
import RenderLevel2 from './RenderLevel2'
import RenderSpells from './RenderSpellsState'


const App = () => { 
  console.time("RenderHell")
  return (
    <RenderLevel1>
      {(level1) => (
        <RenderLevel2>
          {(level2) => (
            <RenderSpells>
              {
                (spells) => console.timeEnd("RenderHell") || (
                  <section>
                    <Wizard name="Kanedias" school="Illusion">
                      <p>Wizard's spells:</p>
                      <ul>
                        <li>{level1}</li>
                        <li>{level2}</li>
                        {spells.map(spell => <li key={spell}>{spell}</li>)}
                      </ul>
                    </Wizard>
                  </section>
                )
              }
            </RenderSpells>
          )}
        </RenderLevel2>
      )}
    </RenderLevel1>
  )
 }

export default hot(App);
