import React from 'react'
import { Form } from 'semantic-ui-react'

class NewStyleForm extends React.Component {
  state = {
    nameOf: "",
    description: ""
  }

  handleName = (event) => {
    this.setState({
      nameOf: event.target.value
    })
  }

  handleDesc = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  render() {

    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Input type="text" name="nameOf" value={this.state.nameOf} onChange={this.handleName} placeholder="style name"/>
        <Form.Input type="text" name="description" value={this.state.description} onChange={this.handleDesc} placeholder="description"/>
        <Form.Button type="submit">Add</Form.Button>
      </Form>
    )
  }
}

export default NewStyleForm
