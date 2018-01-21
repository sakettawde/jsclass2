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
    const existingState = JSON.parse(localStorage.getItem("items"))
    const existingItems = existingState.itemArray
    console.log(existingItems)
    
    if(Array.isArray(existingItems)){
      console.log("I found an array")
      this.setState({itemArray: existingItems})
    }

    // if(typeof existingItems === "object"){
    //   this.setState({itemArray: existingItems})
    // }

  }

  addItemToArray = (item) => {

    let array = this.state.itemArray

    array.push(item)

    this.updateState(array)

  }

  removeItemArray = (itemId) => {
    let array = this.state.itemArray.filter(item=>{
      if(item.itemId === itemId){
        return false
      } else {
        return true
      }
    })

    this.updateState(array)

  }

  updateState = (array) => {
    this.setState({itemArray: array})
    localStorage.setItem("items",JSON.stringify({itemArray:array}))
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
          <Output removeItem={this.removeItemArray} data1={this.state.itemArray}/>
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
