'use strict';

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import TabBar from './components/TabBar';
import TabIcon from './components/TabIcon';
import color from './styles/color';

const scenes = Actions.create(
    <Scene key='ROOT'>
        <Scene key='TABS' tabs={true}>
            <Scene key='D1' component={Dashboard} navBar={NavBar} title='Dash One' icon={TabIcon} initial={true}/>
            <Scene key='D2' component={Dashboard} navBar={NavBar} title='Dash Two' icon={TabIcon}/>
            <Scene key='D3' component={Dashboard} navBar={NavBar} title='Dash Three' icon={TabIcon}/>
            <Scene key='D4' component={Dashboard} navBar={NavBar} title='Dash Four' icon={TabIcon}/>
        </Scene>
    </Scene>
);

export default class App extends Component {
    constructor(props) {
        super(props);
        
        StatusBar.setBackgroundColor(color.statusBar);
    }

    render() {
        return (
            <Router scenes={scenes}/>
        );
    }
}
