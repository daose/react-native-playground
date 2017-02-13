import { StyleSheet } from 'react-native';

export const tab = {
    inactive: 0.2
};

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icon: {
        fontSize: 24,
        color: 'white'
    },
    text: {
        fontSize: 12,
        color: 'white'
    }
});
