

const baseMaterial = 'http://localhost:3000/api/v1/materials'

export const getMaterials = () => {
  return fetch( baseMaterial ).then( resp =>( resp.json() ))
}

export const postMaterial = (body) => {
  const MaterialCreateParams = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(body)
  }
  return fetch(baseMaterial, MaterialCreateParams)
  .then(resp => {return resp.json()})
  .then((json) => {return getMaterials() })
}
