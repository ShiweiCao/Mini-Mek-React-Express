import React, { Component } from 'react';
import TreeView from 'react-treeview'
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";

import Navigation from './Navigation'
import * as actions from '../actions/actionCreator'
import './treeview.css'

class Unit extends Component {
    constructor(props){
        super(props);
        this.state = {
            source : [
                ['Apple', 'Orange'],
                ['Facebook', 'Google'],
                ['Celery', 'Cheeseburger'],
            ],
            collapsedBookkeeping: [],  
        }
    }

    componentDidMount = () => {
        this.setState({
            collapsedBookkeeping: this.state.source.map(()=>false)
        })
        this.props.dispatch(actions.getAllMeches())
    }

    handleClick = (i) => {
        let status = [...this.state.collapsedBookkeeping];
        status[i] = !status[i]
        this.setState({collapsedBookkeeping: status});
    }
    
    collapseAll = () => {
        this.setState({
            collapsedBookkeeping: this.state.collapsedBookkeeping.map(()=>true)
        })
    }

    render() {
        return (
            <div style={{width: "1350px", margin: "auto"}}>
                <Navigation/>
                <div style={{width: "500px", margin: "10px auto"}}>
                    <h1> Unit Organizations </h1> 
                    <Button variant="raised" onClick={this.collapseAll}> Collapse All </Button>
                    {
                        this.props.meches.map((element, index) => {
                            const label = (
                            <span className="node" onClick={() => this.handleClick(index)}>
                                <b>{element.unit}</b>
                            </span>);
                            
                            return (
                                <TreeView 
                                key={index} 
                                nodeLabel={label} 
                                collapsed={this.state.collapsedBookkeeping[index]}
                                onClick={() => this.handleClick(index)}>
                                    <div className="info" >{element.name} -- {element.pilot}</div>
                                </TreeView>
                            )
                        })
                    }
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

export default connect(mapStateToProps)(Unit);