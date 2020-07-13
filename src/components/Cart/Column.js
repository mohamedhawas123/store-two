import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'


class Column extends Component {
    render() {
        return (
            <Table called>
            <Table.Header>
    <Table.Row>
        <Table.HeaderCell>Prodct</Table.HeaderCell>
        <Table.HeaderCell>Name of Product</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Total price</Table.HeaderCell>
    </Table.Row>
    
    </Table.Header>
        </Table>
        )
    }
}

export default Column;