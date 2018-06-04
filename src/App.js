import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import UnitInfo from './components/UnitInfo'
import Pilots from './components/Pilots/Pilots'
import Meches from './components/Meches'
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
                <BrowserRouter>
                    <div className="container">
                        <Route path="/UnitInfo" exact={true} component={UnitInfo} />
                        <Route path="/Pilots" component={Pilots} />
                        <Route path="/Meches" component={Meches} />
                        <Route path='/organization' component={Unit}/>
                    </div>
                </BrowserRouter>                
                
                {/* {this.state.tab === 0 && <UnitInfo />}
                {this.state.tab === 1 && <Pilots />}
                {this.state.tab === 2 && <Meches />}
                {this.state.tab === 3 && <Unit />}  */}
            </div>
            
        );
    }
}

export default App;
