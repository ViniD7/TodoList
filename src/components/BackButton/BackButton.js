import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const BackButton = ({ title }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.containerBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="white" />
            <Text style={styles.textBack}>{title}</Text>
        </TouchableOpacity>
    );
};

export default BackButton;
