import React from 'react'

class NewMaterialForm extends React.Component {
  state = {
    typeOf: "",
    description: ""
  }

  handleType = (event) => {
    this.setState({
      typeOf: event.target.value
    })
  }

  handleDesc = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  render() {

    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="typeof" value={this.state.typeOf} onChange={this.handleType} placeholder="typeof"/>
        <input type="text" name="description" value={this.state.description} onChange={this.handleDesc} placeholder="description"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default NewMaterialForm
