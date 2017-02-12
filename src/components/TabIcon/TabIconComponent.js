'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class TabIconComponent extends Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.selected !== this.props.selected){
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps) {
        console.log('prevProps: ', prevProps.selected);
        console.log('props: ', this.props.selected);
    }
    render() {
        return (
            <Icon name='account-box' style={styles.icon}/>
        );
    }
}
