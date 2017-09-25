
const baseStyle = 'http://localhost:3000/api/v1/styles'

export const getStyles = () => {
  return fetch( baseStyle ).then( resp =>( resp.json() ))
}

export const postStyle = (body) => {
  const StyleCreateParams = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(body)
  }
  return fetch(baseStyle, StyleCreateParams)
  .then(resp => {return resp.json()})
  .then((json) => {return getStyles() })
}

export const updateStyle = (body, styleId) => {
  const StyleUpdateParams = {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify({"material": body})
  }
  return fetch(baseStyle + "/" + styleId, StyleUpdateParams)
  .then(resp => {return resp.json()})
}
