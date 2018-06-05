import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { connect } from "react-redux";

import Tablerow from './Tablerow'
import Navigation from '../Navigation'
import * as actions from '../../actions/actionCreator.js'


class Meches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 0,
            edit : true,
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.getAllMeches())
    }

    selcetRow = (id) => {
        this.props.dispatch(actions.selectMechRow(id))
    }

    startEdit = () => {
        this.setState({
            edit : false,
        })
    }

    endEdit = () => {
        this.setState({
            edit : true,
        })
        this.props.dispatch(actions.selectMechRow(this.state.selected))
    }

    handleChange = (e, tar) => {
        this.props.dispatch(actions.change(e.target.value, tar))
    }

    reset = () => {
        this.props.dispatch(actions.selectMechRow(this.state.selected))
    }

    save = () => {
        this.props.dispatch(actions.saveMech(this.props.temp));
    }

    addNew = () => {
        this.setState({edit: false});
        this.props.dispatch(actions.clearTemp());
    }

    delete = (id) => {
        this.props.dispatch(actions.deleteMech(id));

    }

    render() {
        return (
            <div className="pilotsContainer" style={{width: "1350px", margin: "auto"}}>
                <Navigation/>
                <div className="pilotTable" style={{width: "800px", float: "left"}}>
                    <h1> Pilots List</h1>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell> Name </TableCell>
                                <TableCell> Model </TableCell>
                                <TableCell> Weight </TableCell>
                                <TableCell> Class </TableCell>
                                <TableCell> Delete </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.meches.map ((element, index) => (
                                    <Tablerow element={element} 
                                    index={index} 
                                    select={this.selcetRow}
                                    delete={this.delete}
                                    />
                                ))
                            }
                        </TableBody>
                    </Table>
                    <Button variant="raised" fullWidth onClick={this.addNew}> Add New </Button>
                </div>

                <div className="mechDetail" style={{width: "500px", float:"right"}}>
                    <h1> Pilot Details </h1>
                    <div>
                        <div style={{width: "400px", margin: "auto 0"}}>
                            Name<Input id="name"  
                            onChange={(e) => this.handleChange(e,"name")} 
                            value={this.props.temp.name} 
                            disabled={this.state.edit} fullWidth/> <br/><br/>

                            Model <Input id="model"  
                            onChange={(e) => this.handleChange(e,"model")} 
                            value={this.props.temp.model} 
                            disabled={this.state.edit} fullWidth/> <br/><br/>

                            Weight<br/> <Input id="weight"  
                            onChange={(e) => this.handleChange(e,"weight")} 
                            value={this.props.temp.weight} 
                            disabled={this.state.edit}
                            type="number"/> <br/><br/>

                            Class<br/> <Input id="class"  
                            onChange={(e) => this.handleChange(e,"class")}                            
                            value={this.props.temp.class} 
                            disabled={this.state.edit}/> <br/><br/>

                        </div>
                    </div>
                    <Button variant="raised" color="primary" onClick={this.startEdit} disabled={!this.state.edit}> Start Edit </Button>
                    <Button variant="raised" color="inherit" onClick={this.save} disabled={this.state.edit} style={{margin: "10px"}}> Save Edit </Button><br/><br/>
                    <Button variant="raised" color="default" onClick={this.reset} disabled={this.state.edit}> Reset Value </Button>
                    <Button variant="raised" color="secondary" onClick={this.endEdit} disabled={this.state.edit} style={{margin: "10px"}}> Cancel Edit </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meches : state.mechR.meches,
        temp : state.mechR.temp,
    }
}

export default connect(mapStateToProps)(Meches);