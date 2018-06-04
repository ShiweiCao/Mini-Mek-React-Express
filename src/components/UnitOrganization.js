import React, { Component } from 'react';
import TreeView from 'react-treeview'

import Navigation from './Navigation'

class Unit extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <h1> Unit Organizations </h1>
                <TreeView key="1" nodeLabel="1">
                    
                </TreeView>
            </div>

        )
    }
}

export default Unit;