import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
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
