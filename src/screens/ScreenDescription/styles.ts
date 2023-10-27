import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    titleHeader: {
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
    descriptionContainer: {
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        minHeight: 280,
        borderRadius: 20,
        padding: 15,
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#fff',
    },
    description: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    }

});

export default styles;