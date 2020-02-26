import React, { Component } from 'react'

const delay = () => 
  new Promise(resolve => setTimeout(() => resolve("level 2 prop"), 2500))

class RenderSpells extends Component {
  constructor(props) {
    super(props)

    this.state = {
      level2: "",
      loading: true,
    }
  }

  componentDidMount() {
    delay().then(level2 => this.setState({ level2, loading: false }))
  }

  render() {
    if (this.state.loading) return <h1>Loading level2. . .</h1>
    return this.props.children(this.state.level2)
  }
}

export default RenderSpells
