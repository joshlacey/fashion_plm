import React from 'react'
import {getMaterials} from '../adapters/materials_adapter.js'
import {updateStyle} from '../adapters/styles_adapter.js'
import { Form, Button, Table, Select, Card, Image } from 'semantic-ui-react'

class ShowStyle extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      buttonClicked: false,
      materials: [],
      styleMats: props.materials
    }

  }

  handleClick = () => {
    getMaterials().then(json => this.setState({
      materials: json,
      buttonClicked: true
    }) )
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const materialId = event.target['select'].value
    const material = this.state.materials.find(m => m.id == materialId )
    const styleId = this.props.id
    updateStyle(material, styleId)
    .then(resp => this.componentWillReceiveProps(resp))
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      styleMats: nextProps.materials || this.props.styleMats,
      buttonClicked: false
    })
  }

  render() {
      console.log("show props", this.props)
      const options = this.state.materials.map((m,index)=> ( <option key={index} value={m.id}>{m.typeof} - {m.description}</option> ) )
      const styleMaterials = this.state.styleMats.map((mat, index) =>
        (
          <Table.Row key={index}>
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{mat.typeof}</Table.Cell>
            <Table.Cell>{mat.description}</Table.Cell>
          </Table.Row>
        )
      )
      const styling = {backgroundColor: '#e0e1e2', listStyle: 'none', padding: '20px', margin: '20px', borderRadius: '5px'}
    return (

      <div>
        <Card>
          <Image src="https://fashioneek.files.wordpress.com/2012/05/jacket-front.png"/>
          <Card.Content>
            <Card.Header>
              {this.props.name}
            </Card.Header>
            <Card.Description>
              {this.props.description}
            </Card.Description>
          </Card.Content>
        </Card>


        {this.state.buttonClicked === false ?
          <Button onClick={this.handleClick}>Add Material to style</Button> :
            <Form onSubmit={this.handleSubmit}>
              <Form.Field name='select' control='select' label='Material'>
                {options}
              </Form.Field>
              <Form.Button type="submit">Submit</Form.Button>
            </Form>}

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Material Id</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {styleMaterials}
          </Table.Body>
        </Table>

      </div>
    )
  }
}

export default ShowStyle
