import { StyleSheet } from 'react-native';
import color from '../../styles/color';

export default StyleSheet.create({
    container: {
        backgroundColor: color.primary,
        paddingTop: 0,
        top: 0,
        left: 0,
        right: 0,
        height: 54,
        position: 'absolute'
    },
    titleContainer: {
        marginTop: 10,
        position: 'absolute',
        top: 5,
        left: 0,
        right: 0
    },
    title: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontSize: 18,
        color: color.navBarTitle
    }
});
