'use strict';

import { StyleSheet } from 'react-native';
import color from './color';

export const window = {
    tabBarHeight: 56,
};

export default StyleSheet.create({
    tabs: {
        height: window.tabBarHeight,
        backgroundColor: color.primary
    }
});
