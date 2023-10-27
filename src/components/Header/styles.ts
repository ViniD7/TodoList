import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        height: 200,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(23, 94, 157)',
        borderBottomLeftRadius: 900,
    },
    profilePicture: {
        height: 95,
        width: 95,
        borderRadius: 90,
        backgroundColor: 'gray',
        marginRight: 10
    },
    userName: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 5,
        color: 'white'
    },
    userDescription: {
        fontSize: 15,
        fontWeight: '400',
        color: 'white',
        marginRight: 5
    },
});

export default styles;