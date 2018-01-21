import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

export default class Input extends Component {

    constructor(props){
      super(props)
  
      this.state = {
        itemId: "",
        descp: "",
        qty: ""
      }
  
    }

    addItem = () => {

        const {itemId, descp, qty} = this.state

        const itemObj = { itemId, descp, qty }

        //console.log(itemObj)
        this.props.addItemToArray(itemObj)

        this.setState({
            itemId: "",
            descp: "",
            qty: ""
        })

    }

    render(){
        return(
            <div>
            <Form>
            <Form.Input
            label="Item ID"
            onChange={(e)=>this.setState({ itemId: e.target.value})}
            value={this.state.itemId}>
            </Form.Input>
            <Form.Input
            label="Item Description"
            onChange={(e)=>this.setState({ descp: e.target.value})}
            value={this.state.descp}>
            </Form.Input>
            <Form.Input
            label="Item Qty"
            onChange={(e)=>this.setState({ qty: e.target.value})}
            type="number"
            value={this.state.qty}>
            </Form.Input>
            <Button onClick={this.addItem} primary>Add Item</Button>
            </Form>
            </div>
        )
    }




}