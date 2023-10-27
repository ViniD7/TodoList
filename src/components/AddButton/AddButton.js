import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.organizeAdd}>
            <TouchableOpacity onPress={() => navigation.navigate('TodoList')} style={styles.addTask}>
                <Text style={styles.add}>ADICIONAR</Text>
                <MaterialIcons name='add' color='rgb(23, 94, 157)' size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default AddButton;
