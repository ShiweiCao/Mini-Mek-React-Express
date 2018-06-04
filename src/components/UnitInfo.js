import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { GithubPicker } from 'react-color';
import { connect } from "react-redux";

import Navigation from './Navigation'
import * as actions from '../actions/actionCreator.js'


class UnitInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitName : "",
            Affiliation : "",
            color : "",
            show: false,
        }
    }

    componentDidMount = () => {
        this.props.dispatch(actions.getAllUnits());
    }

    onChange = (e) => {
        this.setState({
            unitName : e.target.value,
        })
    }
    
    select = (e) => {
        this.setState({
            Affiliation : e.target.value,
        })
    } 

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    showColor = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    submit = () => {
        let unit = {
            name : this.state.unitName,
            affiliation : this.state.Affiliation,
            color : this.state.color
        }
        this.props.dispatch(actions.saveUnit(unit));
    }

    

    render() {
        return (
            <div>
                <Navigation/>
                <div style={{width: "300px", margin: "10px auto"}}>
                    <TextField id="Unit Name" label="Unit Name" value={this.state.unitName} onChange={this.onChange}/> <br/>
                    <TextField select label="Affiliation" style={{width: '200px', margin: '30px auto'}} onChange={this.select} value={this.state.Affiliation}>
                        {
                            this.props.units.map((element, index) => (
                                <option key={index} value={element.affiliation}> {element.affiliation} </option>
                            ))
                        }
                        {/* <option key="0" value="Wolf's Dragoons">Wolf's Dragoons</option>
                        <option key="1" value="MK2">MK2</option> */}
                    </TextField> <br/>
                    <Button variant="raised" onClick={this.showColor} style={{width: "200px"}}>Pick Color</Button>
                    
                    { this.state.show && (<div><br/><GithubPicker onChangeComplete={ this.handleChangeComplete } /></div>)}
                    <Button variant="raised" onClick={this.submit} color="primary" style={{margin: "10px"}}>Save</Button>
                    <Button variant="raised" color="secondary"> Reset </Button>               
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        units: state.unitR.units
    }
}


export default connect(mapStateToProps)(UnitInfo);