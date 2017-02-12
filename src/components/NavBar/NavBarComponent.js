'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class NavBarComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}
