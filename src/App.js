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

  componentDidMount(){
//    localStorage.removeItem("items")
    const existingItems = JSON.parse(localStorage.getItem("items"))
    console.log(existingItems)

    if(existingItems === Array){
      this.setState({itemArray: existingItems})
    }

    // if(typeof existingItems === "object"){
    //   this.setState({itemArray: existingItems})
    // }

  }

  addItemToArray = (item) => {
    let array = this.state.itemArray

    array.push(item)

    this.setState({itemArray: array})

    localStorage.setItem("items",JSON.stringify(array))

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
