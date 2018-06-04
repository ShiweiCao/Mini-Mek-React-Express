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
                <TableCell> {this.props.element.Name} </TableCell>
                <TableCell> {this.props.element.Rank} </TableCell>
                <TableCell> {this.props.element.Age} </TableCell>
                <TableCell> {this.props.element.Gunnery} </TableCell>
                <TableCell> {this.props.element.Mech} </TableCell>
                <TableCell> 
                    <Button variant="raised" color="secondary">
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        )
    }
}