import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import UnitInfo from './components/UnitInfo'
import Pilots from './components/Pilots/Pilots'
import Mechs from './components/Mechs'
import Unit from './components/UnitOrganization'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab : 0,
        }
    }

    handleChange = (event, value) => {
        this.setState({
            tab : value,
        })
    }
    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Tabs onChange={this.handleChange} centered>
                        <Tab label="Unit Info" />
                        <Tab label="Pilots" />
                        <Tab label="Mechs" />
                        <Tab label="Unit Organization" />
                    </Tabs>
                </AppBar>
                {this.state.tab === 0 && <UnitInfo />}
                {this.state.tab === 1 && <Pilots />}
                {this.state.tab === 2 && <Mechs />}
                {this.state.tab === 3 && <Unit />} 
            </div>
            
        );
    }
}

export default App;
