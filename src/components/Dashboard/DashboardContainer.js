'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
    shouldComponentUpdate(nextProps){
        return false;
    }

    render() {
        return (
            <DashboardComponent title={this.props.navigationState.title}/>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(
    mapStateToProps
)(DashboardContainer);
