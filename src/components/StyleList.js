import React from 'react'
import StyleItem from './StyleItem.js'
import { } from 'semantic-ui-react'


const StyleList = (props) => {
  const styles = props.styles.map((s,index) => {
    return <StyleItem id={s.id} styleMats={s.materials} key={index} name={s.name} description={s.description}/>})

  return (
    <ul>
      {styles}
    </ul>
  )
}

export default StyleList
