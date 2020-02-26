import React from 'react'
import { hot } from 'react-hot-loader/root'

import Wizard from './Wizard'
import RenderLevel1 from './RenderLevel1'
import RenderLevel2 from './RenderLevel2'
import RenderSpells from './RenderSpells'


const App = () => { 
  return (
    <section>
      <Wizard name="Kanedias" school="Illusion">
        <p>Wizard's spells:</p>
        <RenderLevel1>
          {(level1) => (
            <div>
              <RenderLevel2>
                {(level2) => (
                  <div>
                    <RenderSpells>
                      {
                        (spells) => (
                          <ul>
                            <li>{level1}</li>
                            <li>{level2}</li>
                            {spells.map(spell => <li key={spell}>{spell}</li>)}
                          </ul>
                        )
                      }
                    </RenderSpells>
                  </div>
                )}
              </RenderLevel2>
            </div>
          )}
        </RenderLevel1>
      </Wizard>
    </section>
  )
 }

export default hot(App);
