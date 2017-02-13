import { StyleSheet } from 'react-native';
import color from '../../styles/color';

export default StyleSheet.create({
    container: {
        elevation: 4,
        backgroundColor: color.primary,
        paddingTop: 0,
        top: 0,
        left: 0,
        right: 0,
        height: 54,
        position: 'absolute'
    },
    titleContainer: {
        flex: 1,
        margin: 16,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontSize: 18,
        color: color.navBarTitle
    }
});
