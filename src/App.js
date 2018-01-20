import React, { Component } from 'react';
import './App.css';
import   { GridRow, GridColumn, Container, Grid, Divider, Button, Header } from 'semantic-ui-react'
import Input from './Input'
import Output from './Output'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      loading: false,
      itemArray: []
    }

  }

  addItemToArray = (item) => {
    let array = this.state.itemArray

    array.push(item)

    this.setState({itemArray: array})

    //console.log(array)

  }

  buttonClick = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {
    return (
      <div className="App">
      <Container>
      <Header as='h1'>Saket's Inventory Manager</Header>
      <Divider />
      <Grid>
        <GridRow columns={2}>
          <GridColumn>
            <Input addItemToArray={this.addItemToArray}/>
          </GridColumn>
          <GridColumn>
          <Output data1={this.state.itemArray}/>
          </GridColumn>
          <GridColumn>
          </GridColumn>
        </GridRow>
      </Grid>
      </Container>
      </div>
    );
  }
}

export default App;
