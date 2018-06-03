import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class Pilots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pilots : [
                { Name : "Natasha", Rank : "Commander", Age : 34, Gunnery: "2", Piloting: "3", Mech : "WHM-6R" },
                { Name : "Jaime", Rank : "Colonel", Age : 42, Gunnery: "2", Piloting: "2", Mech : "ARC-2R" },
            ],
            selected : 0,
            edit : true,
            temp: {Name : "Natasha", Rank : "Commander", Age : 34, Gunnery: "2", Piloting: "3", Mech : "WHM-6R"},
        }
    }

    selcetRow = (id) => {
        this.setState({
            selected : id, 
            temp : this.state.pilots[id]
        })
    }

    startEdit = () => {
        this.setState({
            edit : false,
        })
    }

    endEdit = () => {
        this.setState({
            edit : true,
            temp : this.state.pilots[this.state.selected]
        })
    }

    handleChange = (e, tar) => {
        let obj = {...this.state.temp};
        obj[tar] = e.target.value;
        this.setState({
            temp : obj,
        })
    }

    reset = () => {
        this.setState({
            temp : this.state.pilots[this.state.selected]
        })
    }

    render() {
        return (
            <div className="pilotsContainer" style={{width: "1350px", margin: "auto"}}>
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
                                this.state.pilots.map ((element, index) => (
                                    <TableRow onClick={ () =>this.selcetRow(index)}>
                                        <TableCell> {element.Name} </TableCell>
                                        <TableCell> {element.Rank} </TableCell>
                                        <TableCell> {element.Age} </TableCell>
                                        <TableCell> {element.Gunnery + '/' + element.Piloting} </TableCell>
                                        <TableCell> {element.Mech} </TableCell>
                                        <TableCell> 
                                            <Button variant="raised" color="secondary">
                                                Delete
                                            </Button> 
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>

                <div className="pilotDetail" style={{width: "500px", float:"right"}}>
                    <h1> Pilot Details </h1>
                    <div>
                        <div style={{width: "400px", margin: "auto 0"}}>
                            <TextField id="Name" label="Name" 
                            onChange={(e) => this.handleChange(e,"Name")} 
                            value={this.state.temp.Name} 
                            fullWidth disabled={this.state.edit}/> <br/><br/>

                            <TextField id="Rank" label="Rank" 
                            onChange={(e) => this.handleChange(e,"Rank")} 
                            value={this.state.temp.Rank} 
                            fullWidth disabled={this.state.edit}/> <br/><br/>

                            <TextField id="Age" label="Age" 
                            onChange={(e) => this.handleChange(e,"Age")} 
                            value={this.state.temp.Age} 
                            disabled={this.state.edit}/> <br/><br/>

                            <TextField id="Gunnery" label="Gunnery" 
                            onChange={(e) => this.handleChange(e,"Gunnery")}                            
                            value={this.state.temp.Gunnery} 
                            disabled={this.state.edit}/> <br/><br/>

                            <TextField id="Piloting" label="Piloting" 
                            onChange={(e) => this.handleChange(e,"Piloting")}                             
                            value={this.state.temp.Piloting} 
                            disabled={this.state.edit}/> <br/><br/>
                        </div>
                    </div>
                    <Button variant="raised" color="primary" onClick={this.startEdit} disabled={!this.state.edit}> Start Edit </Button>
                    <Button variant="raised" color="inherit" disabled={this.state.edit} style={{margin: "10px"}}> Save Edit </Button><br/><br/>
                    <Button variant="raised" color="default" onClick={this.reset} disabled={this.state.edit}> Reset Value </Button>
                    <Button variant="raised" color="secondary" onClick={this.endEdit} disabled={this.state.edit} style={{margin: "10px"}}> Cancel Edit </Button>
                </div>
            </div>
           
        )
    }
}

export default Pilots;