import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StyleList from './StyleList'
import ShowStyle from './ShowStyle'

import {getStyles, postStyle} from '../adapters/styles_adapter.js'
import { Button } from 'semantic-ui-react'

export default class StyleContainer extends React.Component {

  state={
    styles: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const nameOf = event.target['nameOf'].value
    const description = event.target['description'].value
    if(nameOf.length > 0 && description.length > 0) {
      const newBody = {name: nameOf, description: description}
      postStyle(newBody).then( json => this.setState({
        styles: json
      }) )
    } else {
      alert("Please enter a name and description")
    }
  }



  componentDidMount = () => {
    getStyles().then( json => this.setState({
      styles: json
    }) )
  }


  render() {
    const styling = {display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(200px, auto)'}
    console.log('rendering style container');
    return(
      <div>

        <Route exact path="/styles" render={(props)=>
            <StyleList styles={this.state.styles} handleSubmit={this.handleSubmit} />
          } />

        <Route path="/styles/:id" render={(props) => {
              const { id } = props.match.params
              if (this.state.styles.length) {
                const style = this.state.styles.find(s => s.id === parseInt(id))
                console.log(style)
                return <ShowStyle  {...style} {...props}/>
              } else {
                return null
              }
          }} />


      </div>
    )
  }

}
