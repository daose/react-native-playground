'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class DashboardComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
