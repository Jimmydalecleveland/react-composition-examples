import React from 'react'
import { hot } from 'react-hot-loader/root'

import Wizard from './Wizard'
import useSpells from './useSpellsState'
import useLevel1 from './useLevel1'
import useLevel2 from './useLevel2'


const App = () => { 
  console.time("RenderHeaven")
  const { loading, spells: hookSpells } = useSpells()
  const { loading: loadingLevel1, level1 } = useLevel1()
  const { loading: loadingLevel2, level2 } = useLevel2()

  if (loading || loadingLevel1 || loadingLevel2) return <h1>Loading . . .</h1>

  console.timeEnd("RenderHeaven")
  return (
    <section>
      <h1>Third Wizard (H)</h1>
        <Wizard name="Bayaz" school="Evocation">
          <ul>
            <li>{level1}</li>
            <li>{level2}</li>
            {hookSpells.map(spell => <li key={spell}>{spell}</li>)}
          </ul>
        </Wizard>
    </section>
  )
 }

export default hot(App);
