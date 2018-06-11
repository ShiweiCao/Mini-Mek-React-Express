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


class Pilots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 0,
            edit : true,
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.getAllPilots())
    }

    selcetRow = (id) => {
        this.setState({
            selected: id,
        })
        this.props.dispatch(actions.selectPilotRow(id))
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
        this.props.dispatch(actions.selectPilotRow(this.state.selected))
    }

    handleChange = (e, tar) => {
        this.props.dispatch(actions.change(e.target.value, tar))
    }

    reset = () => {
        this.props.dispatch(actions.selectPilotRow(this.state.selected))
    }

    save = () => {
        this.props.dispatch(actions.savePilot(this.props.temp));
        this.setState({edit:true});
    }

    addNew = () => {
        this.setState({edit: false});
        this.props.dispatch(actions.clearTemp());
    }

    delete = (id) => {
        this.props.dispatch(actions.deletePilot(id));

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
                                <TableCell> Rank </TableCell>
                                <TableCell> Age </TableCell>
                                <TableCell> Skills </TableCell>
                                <TableCell> Mech </TableCell>
                                <TableCell> Delete </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.pilots.map ((element, index) => (
                                    <Tablerow element={element} 
                                    index={index} 
                                    select={this.selcetRow}
                                    delete={this.delete}
                                    isSelected={index == this.state.selected?true:false}
                                    />
                                ))
                            }
                        </TableBody>
                    </Table>
                    <Button variant="raised" fullWidth onClick={this.addNew}> Add New </Button>
                </div>

                <div className="pilotDetail" style={{width: "500px", float:"right"}}>
                    <h1> Pilot Details </h1>
                    <div>
                        <div style={{width: "400px", margin: "auto 0"}}>
                            Name<Input id="name" label="Name" 
                            onChange={(e) => this.handleChange(e,"name")} 
                            value={this.props.temp.name} 
                            disabled={this.state.edit} fullWidth/> <br/><br/>

                            Rank <Input id="Rank" label="Rank" 
                            onChange={(e) => this.handleChange(e,"rank")} 
                            value={this.props.temp.rank} 
                            disabled={this.state.edit} fullWidth/> <br/><br/>

                            Age<br/> <Input id="age" label="Age" 
                            onChange={(e) => this.handleChange(e,"age")} 
                            value={this.props.temp.age} 
                            disabled={this.state.edit}
                            type="number"/> <br/><br/>

                            Gunnery<br/> <Input id="gunnery" label="Gunnery" 
                            onChange={(e) => this.handleChange(e,"gunnery")}                            
                            value={this.props.temp.gunnery} 
                            disabled={this.state.edit}
                            type="number"/> <br/><br/>

                            Piloting<br/> <Input id="piloting" label="Piloting" 
                            onChange={(e) => this.handleChange(e,"piloting")}                             
                            value={this.props.temp.piloting} 
                            disabled={this.state.edit}
                            type="number"/> <br/><br/>
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
        pilots : state.pilotR.pilots,
        temp : state.pilotR.temp,
    }
}

export default connect(mapStateToProps)(Pilots);