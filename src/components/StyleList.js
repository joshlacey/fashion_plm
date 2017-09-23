import React from 'react'
import StyleItem from './StyleItem.js'

const StyleList = (props) => {
  const styles = props.styles.map((s,index) => <StyleItem key={index} name={s.name} description={s.description}/>)

  return (
    <ul>
      {styles}
    </ul>
  )
}

export default StyleList
