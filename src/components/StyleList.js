import React from 'react'
import StyleItem from './StyleItem.js'
import NewStyleForm from './NewStyleForm.js'
import { Button } from 'semantic-ui-react'


class StyleList extends React.Component {
  state = {
    showForm: false
  }

  toggleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  render () {
  const styles = this.props.styles.map((s,index) => {
    return (
      <StyleItem id={s.id} styleMats={s.materials} key={index} name={s.name} description={s.description}/>
    )})
  const styling = {display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(200px, auto)'}
  return (
    <div>
      {this.state.showForm === false ?
      <Button onClick={this.toggleShowForm}>Add Style</Button>
      : <NewStyleForm handleSubmit={this.props.handleSubmit} toggleShow={this.toggleShowForm}/> }
      <div style={styling}>
        {styles}
      </div>
    </div>


  )
}
}

export default StyleList
