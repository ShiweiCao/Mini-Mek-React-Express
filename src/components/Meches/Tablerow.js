import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

export default class Tablerow extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <TableRow onClick={ () => this.props.select(this.props.index) }>
                <TableCell> {this.props.element.name} </TableCell>
                <TableCell> {this.props.element.model} </TableCell>
                <TableCell> {this.props.element.weight} </TableCell>
                <TableCell> {this.props.element.class} </TableCell>
                <TableCell> 
                    <Button variant="raised" color="secondary" onClick={ () => this.props.delete(this.props.element._id)}>
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        )
    }
}