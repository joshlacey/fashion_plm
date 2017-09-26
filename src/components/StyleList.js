import React from 'react'
import StyleItem from './StyleItem.js'
import { } from 'semantic-ui-react'


const StyleList = (props) => {
  const styles = props.styles.map((s,index) => {
    return (
      <StyleItem id={s.id} styleMats={s.materials} key={index} name={s.name} description={s.description}/>
    )})
  const styling = {display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(200px, auto)'}
  return (
      <div style={styling}>{styles}</div>

  )
}

export default StyleList
