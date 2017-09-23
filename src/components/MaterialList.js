import React from 'react'
import MaterialItem from './MaterialItem.js'

const MaterialList = (props) => {
  console.log(props.materials)
  const materials = props.materials.map((m, index) => <MaterialItem key={index} typeof={m.typeof} description={m.description}/>)

  return (
      <ul>
        {materials}
      </ul>
  )
}

export default MaterialList
