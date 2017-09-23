import React from 'react'
import StyleList from './StyleList'

const baseStyle = 'http://localhost:3000/api/v1/styles'

export default class StyleContainer extends React.Component {
  state={
    styles: []
  }

  getStyles = () => {
    fetch( baseStyle )
    .then( resp => resp.json())
    .then( json => this.setState({
      styles: json
    }) )
  }

  componentDidMount = () => {
    console.log("didMount")
    this.getStyles()
  }


  render() {
    return(
      <StyleList styles={this.state.styles} />
    )
  }

}
