'use strict';

import React, { Component } from 'react';
import { Easing, View, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, { tab } from './styles';

export default class TabIconComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(props.selected ? 1 : tab.inactive)
        }

        this.animate = this.animate.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.selected !== this.props.selected){
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selected !== this.props.selected) {
            if(this.props.selected) {
                this.animate(1);
            } else {
                this.animate(tab.inactive);
            }
        }
    }

    animate(value) {
        Animated.timing(
            this.state.opacity,
            {
                toValue: value,
                easing: Easing.out(Easing.exp),
                duration: 256
            }
        ).start();
    }

    render() {
        return (
            <Animated.View style={[{opacity: this.state.opacity}, styles.container]}>
                <Icon name='account-box' style={styles.icon}/>
                {this.props.selected &&
                    <Text style={styles.text} numOfLines={1}>{this.props.title}</Text>
                }
            </Animated.View>
        );
    }
}
