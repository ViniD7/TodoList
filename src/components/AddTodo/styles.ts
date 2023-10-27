import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        paddingHorizontal: 20,
        paddingTop: 35
    },
    content: {
        justifyContent: 'center',
        marginTop: 50
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#fff',
    },
    inputContainer: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: 280,
        borderRadius: 20,
        padding: 15,
        paddingTop: 30,
        justifyContent: 'space-between',
    },
    inputTitle: {
        paddingHorizontal: 15,
        borderRadius: 5,
        color: '#FFF',
        fontSize: 14,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    inputDescription: {
        paddingHorizontal: 15,
        borderRadius: 5,
        color: '#FFF',
        fontSize: 14,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    addTask: {
        backgroundColor: 'rgb(70, 21, 175)',
        height: 50,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    add: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.5
    },
    addTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    },
    organize: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    modalContainer: {
        backgroundColor: '#50C878',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 200,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'darkgreen',
        position: 'absolute',
        right: 20,
        top: 20
    },
    modalText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    }
});

export default styles;