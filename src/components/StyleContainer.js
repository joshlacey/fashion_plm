import React from 'react'
import StyleList from './StyleList'
import NewStyleForm from './NewStyleForm.js'
import {getStyles, postStyle} from '../adapters/styles_adapter.js'
import { Button } from 'semantic-ui-react'

export default class StyleContainer extends React.Component {
  state={
    styles: [],
    showForm: false
  }

  handleClick = () => {
    this.setState({
      showForm: true
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const nameOf = event.target['nameOf'].value
    const description = event.target['description'].value
    if(nameOf.length > 0 && description.length > 0) {
      const newBody = {name: nameOf, description: description}
      postStyle(newBody).then( json => this.setState({
        styles: json
      }) )
      this.setState({
        showForm: false
      })
    } else {
      alert("Please enter a name and description")
    }
  }



  componentDidMount = () => {
    getStyles().then( json => this.setState({
      styles: json
    }) )
  }


  render() {
    return(
      <div>
      {this.state.showForm === false ?
      <Button onClick={this.handleClick}>Add Style</Button>
      : <NewStyleForm handleSubmit={this.handleSubmit} /> }
      <StyleList styles={this.state.styles} />
      </div>
    )
  }

}
