'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
    render() {
        return (
            <DashboardComponent />
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(
    mapStateToProps
)(DashboardContainer);
