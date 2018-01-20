import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

export default class Output extends Component {

    constructor(props){
      super(props)
  
      this.state = {
    
      }
  
    }

    render(){

        console.log(this.props)

        const data1 = this.props.data1

        return(
            <div>
            <Table >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Item Id</Table.HeaderCell>
                <Table.HeaderCell>Item Description</Table.HeaderCell>
                <Table.HeaderCell>Qty</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>

            {data1 && data1.map(item=>{
                return (
                <Table.Row key={item.itemId}>
                <Table.Cell>{item.itemId}</Table.Cell>
                <Table.Cell>{item.descp}</Table.Cell>
                <Table.Cell>{item.qty}</Table.Cell>
                <Table.Cell><Button>Remove</Button></Table.Cell>
              </Table.Row>
            )}
            )}
              
              </Table.Body>
              </Table>
            </div>
        )
    }


}