import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <AppBar position="static" color="default">
                <Tabs onChange={this.handleChange} centered>
                    <Link to='/UnitInfo'><Tab label="Unit Info" /></Link>
                    <Link to='/Pilots'><Tab label="Pilots" /></Link>
                    <Link to='/Meches'><Tab label="Mechs" /></Link>
                    <Link to='/organization'><Tab label="Unit Organization" /></Link>
                </Tabs>
            </AppBar>
        )
    }
}