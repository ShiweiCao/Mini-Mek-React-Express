import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Navigation from './Navigation'


class UnitInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitName : "",
            Affiliation : "",
            color : "",
        }
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

    changeHandler = (colors) => {
        // this.setState({
        //     color: colors
        // })
        console.log(colors);
    }    

    render() {
        return (
            <div>
                <Navigation/>
                <div style={{width: "300px", margin: "auto"}}>
                    <TextField id="Unit Name" label="Unit Name" value={this.state.unitName} onChange={this.onChange}/> <br/>
                    <TextField select label="Affiliation" style={{width: '200px', margin: '30px auto'}} onChange={this.select} value={this.state.Affiliation}>
                        <option key="0" value="Wolf's Dragoons">Wolf's Dragoons</option>
                        <option key="1" value="MK2">MK2</option>
                    </TextField> <br/>

                    <Button variant="raised" color="primary" style={{margin: "10px"}}>Save</Button>
                    <Button variant="raised" color="secondary"> Reset </Button>               
                </div>
            </div>
        )
    }
}

export default UnitInfo;