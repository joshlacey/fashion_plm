import React from 'react'
import MaterialList from './MaterialList'
import NewMaterialForm from './NewMaterialForm.js'
import {getMaterials, postMaterial} from '../adapters/materials_adapter.js'

export default class MaterialContainer extends React.Component {

    state = {
      materials: [],
      showForm: false
    }

  handleClick = () => {
    this.setState({
      showForm: true
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const typeOf = event.target['typeof'].value
    const description = event.target['description'].value
    if(typeOf.length > 0 && description.length > 0) {
      const newBody = {typeof: typeOf, description: description}
      postMaterial(newBody).then( json => this.setState({
        materials: json
      }) )
      this.setState({
        showForm: false
      })
    } else {
      alert("Please enter a type and description")
    }
  }


  componentDidMount = () => {
    getMaterials().then( json => this.setState({
      materials: json
    }) )
  }


  render() {
    return(
      <div>
      {this.state.showForm === false ?
      <button onClick={this.handleClick}>AddMaterial</button>
      : <NewMaterialForm handleSubmit={this.handleSubmit} /> }
      <MaterialList materials={this.state.materials} />
      </div>
    )
  }

}
