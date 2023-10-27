import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'rgb(23, 94, 157)',
        borderRadius: 8,
        height: 48,
        width: '66%'
    },
    taskText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: '#FFF',
        fontWeight: '400',
    },
    organize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    options: {
        marginLeft: 10,
        backgroundColor: 'red',
        height: 48,
        width: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    organizeOptions: {
        flexDirection: 'row',
    },
    editTaskText: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
