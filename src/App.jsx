import React from 'react'
import { hot } from 'react-hot-loader/root'

import MutatedWizard from './MutatedWizard'
import MutatedWizard2 from './MutatedWizard2'
import MutatedWizard3 from './MutatedWizard3'

import Wizard from './Wizard'
import RenderSpells from './RenderSpells'
import useSpells from './useSpells'


const App = () => { 
  const hookSpells = useSpells()
  console.log(hookSpells)

  return (
    <>
      <section>
        <h1>The Mutated</h1>
        <br />
        <h1>First Wizard (HOC)</h1>
        <MutatedWizard name="Fell" school="Illusion" />
        <hr />

        <h1>Second Wizard (RP)</h1>
        <MutatedWizard2 name="Kanedias" school="Transmutation" />
        <hr />

        <h1>Second Wizard (H)</h1>
        <MutatedWizard3 name="Bayaz" school="Evocation" />
        <hr />
        <hr />
      </section>

      <section>
        <h1>The Pure</h1>
        <br />
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
        <Wizard name="Bayaz" school="Evocation">
          <ul>
            {hookSpells.map(spell => <li key={spell}>{spell}</li>)}
          </ul>
        </Wizard>
        <hr />

      </section>
    </>
  )
 }

export default hot(App);
