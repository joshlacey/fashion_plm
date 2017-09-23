import React from 'react'

const baseMaterial = 'http://localhost:3000/api/v1/materials'

export default class MaterialContainer extends React.Component {
  state={
    materials: []
  }

  getMaterials = () => {
    fetch( baseMaterial )
    .then( resp => resp.json())
    .then( json => this.setState({
      materials: json
    }) )
  }
  
  componentDidMount = () => {
    console.log("didMount")
    this.getMaterials()
  }


  render() {
    console.log("state", this.state)
    let materials = this.state.materials.map(m => <li>{m.typeof} --- {m.description} </li>)
    return(
      <ul>
        <li>hello</li>
        {materials}
      </ul>
    )
  }

}
