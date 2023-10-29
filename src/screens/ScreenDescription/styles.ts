import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        paddingTop: 50,
        paddingHorizontal: 20,
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