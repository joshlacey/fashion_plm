//import React from 'react'

const baseMaterial = 'http://localhost:3000/api/v1/materials'

export const getMaterials = () => {
  console.log("get", this)
  fetch( baseMaterial )
    .then( resp => resp.json())
    .then( json => this.setState({
      materials: json
    }) )
}

export const postMaterial = (body) => {
  const MaterialCreateParams = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(body)
  }
  return fetch(baseMaterial, MaterialCreateParams).then(resp => {resp.json()})
  .then((json) => {
    getMaterials()
  })
}


// module.exports = {
//   getMaterials,
//   postMaterial
// }
// export getMaterials
// export postMaterial
