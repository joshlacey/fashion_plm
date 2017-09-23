import React from 'react'
import MaterialList from './MaterialList'
import NewMaterialForm from './NewMaterialForm.js'
//import {getMaterials, postMaterial} from '../adapters/materials_adapter.js'
// import postMaterial from '../adapters/materials_adapter.js'

const baseMaterial = 'http://localhost:3000/api/v1/materials'

export default class MaterialContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      materials: [],
      showForm: false
    }
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
      this.postMaterial(newBody)
      this.setState({
        showForm: false
      })
    } else {
      alert("Please enter a type and description")
    }
  }


  componentDidMount = () => {
    this.getMaterials()
  }

  postMaterial = (body) => {
    const MaterialCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(baseMaterial, MaterialCreateParams).then(resp => {resp.json()})
    .then((json) => {
      this.getMaterials()
    })
  }

  getMaterials = () => {
    console.log("get", this)
    fetch( baseMaterial )
      .then( resp => resp.json())
      .then( json => this.setState({
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
