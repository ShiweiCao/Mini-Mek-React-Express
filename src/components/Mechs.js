import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Mech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mechs : [
                { "id": 1,
                "Name": "Warhammer",
                "Model": "WHM-6R",
                "Weight": 70,
                "Class": "Heavy" },
                
                { "id": 2,
                "Name": "War",
                "Model": "WHM",
                "Weight": 30,
                "Class": "Light" },
            ],
            selected : 0,
            edit : true,
            temp: { "id": 1,
            "Name": "Warhammer",
            "Model": "WHM-6R",
            "Weight": 70,
            "Class": "Heavy" },
        }
    }

    selcetRow = (id) => {
        this.setState({
            selected : id, 
            temp : this.state.mechs[id]
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
            temp : this.state.mechs[this.state.selected]
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
            temp : this.state.mechs[this.state.selected]
        })
    }

    render() {
        return (
            <div className="mechsContainer" style={{width: "1350px", margin: "auto"}}>
                <div className="mechsTable" style={{width: "800px", float: "left"}}>
                    <h1> Mechs List</h1>
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
                                this.state.mechs.map ((element, index) => (
                                    <TableRow onClick={ () =>this.selcetRow(index)}>
                                        <TableCell> {element.Name} </TableCell>
                                        <TableCell> {element.Model} </TableCell>
                                        <TableCell> {element.Weight} </TableCell>
                                        <TableCell> {element.Class} </TableCell>
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
                    <h1> Mechs Details </h1>
                    <div>
                        <div style={{width: "400px", margin: "auto 0"}}>
                            <TextField id="Name" label="Name" 
                            onChange={(e) => this.handleChange(e,"Name")} 
                            value={this.state.temp.Name} 
                            fullWidth disabled={this.state.edit}/> <br/><br/>

                            <TextField id="Model" label="Model" 
                            onChange={(e) => this.handleChange(e,"Model")} 
                            value={this.state.temp.Model} 
                            fullWidth disabled={this.state.edit}/> <br/><br/>

                            <TextField id="Weight" label="Weight" 
                            onChange={(e) => this.handleChange(e,"Weight")} 
                            value={this.state.temp.Weight} 
                            disabled={this.state.edit}/> <br/><br/>

                            <TextField id="Class" label="Class" 
                            onChange={(e) => this.handleChange(e,"Class")}                            
                            value={this.state.temp.Class} 
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

export default Mech;