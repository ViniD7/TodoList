import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#fff',
    },
    inputContainer: {
        marginBottom: 20,
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
        borderColor: 'grafy',
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
        backgroundColor: '#FFF',
        height: 50,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    add: {
        color: 'rgb(23, 94, 157)',
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
    organizeAdd: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        paddingHorizontal: 30
    }
});

export default styles;