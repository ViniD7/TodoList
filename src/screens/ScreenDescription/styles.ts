import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        justifyContent: 'space-between',
    },

    task: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        marginRight: 5
    },
    organizeTask: {
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 20,
        height: '60%',
    },
    titlePending: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },

});

export default styles;