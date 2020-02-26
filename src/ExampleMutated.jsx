import React from 'react'
import { hot } from 'react-hot-loader/root'

import MutatedWizard from './MutatedWizard'
import MutatedWizard2 from './MutatedWizard2'
import MutatedWizard3 from './MutatedWizard3'

const App = () => { 
  return (
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
    </section>
  )
 }

export default hot(App);
