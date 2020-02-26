import React, { Component } from 'react'

const delay = () => 
  new Promise(resolve => setTimeout(() => resolve("level 1 prop"), 1500))

class RenderSpells extends Component {
  constructor(props) {
    super(props)

    this.state = {
      level1: "",
      loading: true,
    }
  }

  componentDidMount() {
    delay().then(level1 => this.setState({ level1, loading: false }))
  }

  render() {
    if (this.state.loading) return <h1>Loading level1. . .</h1>
    return this.props.children(this.state.level1)
  }
}

export default RenderSpells
