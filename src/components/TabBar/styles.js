import { StyleSheet } from 'react-native';
import color from '../../styles/color';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: color.primary,
        left: 0,
        right: 0,
        bottom: 0,
        height: 56
    }
});
