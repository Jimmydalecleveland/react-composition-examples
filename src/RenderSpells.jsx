import { Component } from 'react'
import spells from './spells'

class RenderSpells extends Component {
  render() {
    return this.props.children(spells)
  }
}

export default RenderSpells
