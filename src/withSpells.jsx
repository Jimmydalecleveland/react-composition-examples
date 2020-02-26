import React, { Component } from 'react'
import spells from './spells'

const withSpells = (WrappedComponent) => {
  return class extends Component {
    render() {
      return <WrappedComponent spells={spells} {...this.props}/>
    }
  }
}

export default withSpells
