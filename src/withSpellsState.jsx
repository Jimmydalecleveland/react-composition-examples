import React, { Component } from 'react'
import { getSpells } from './spells'

const withSpells = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        loading: true,
        spells: []
      }
    }
    
    componentDidMount() {
      getSpells().then(spells => this.setState({ spells, loading: false }))
    }

    render() {
      if (this.state.loading) return <h1>Loading . . .</h1>
      return <WrappedComponent spells={this.state.spells} {...this.props}/>
    }
  }
}

export default withSpells
