import React, { Component } from 'react'
import { getSpells } from './spells'

class RenderSpells extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spells: [],
      loading: true,
    }
  }

  componentDidMount() {
    getSpells().then(spells => this.setState({ spells, loading: false }))
  }

  render() {
    if (this.state.loading) return <h1>Loading . . .</h1>
    return this.props.children(this.state.spells)
  }
}

export default RenderSpells
