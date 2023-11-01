import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useSaveTask from '../../hooks/useSaveTask';

const AddTodo = () => {

    const {
        saveTask,
        setDescription,
        description,
        setTitle,
        title,
        showModal
    } = useSaveTask()

    useEffect(() => {
        const loadTasksFromStorage = async () => {
            try {
                const tasksFromStorage = await AsyncStorage.getItem('tasks');
                if (tasksFromStorage) {
                    dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(tasksFromStorage) });
                }
            } catch (error) {
            }
        };

        loadTasksFromStorage();
    }, []);

    return (
        <View style={styles.content}>
            <Text style={styles.header}>Adicionar Tarefas</Text>
            <View style={styles.inputContainer}>
                <View>
                    <View>
                        <Text style={styles.addTitle}>Título</Text>
                    </View>
                    <TextInput
                        style={styles.inputTitle}
                        placeholder="Título da tarefa"
                        placeholderTextColor={'rgb(190,190,190)'}
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                </View>
                <View>
                    <Text style={styles.addTitle}>Descrição</Text>
                    <TextInput
                        style={styles.inputDescription}
                        placeholder="Descrição da tarefa"
                        placeholderTextColor={'rgb(190,190,190)'}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                </View>
                <TouchableOpacity onPress={saveTask} style={styles.addTask}>
                    <Text style={styles.add}>ADICIONAR</Text>
                    <MaterialIcons name='add' color='white' size={20} />
                </TouchableOpacity>
            </View>
            <Modal visible={showModal} transparent={true} animationType="fade">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Tarefa adicionada{'\n'} com sucesso</Text>
                </View>
            </Modal>
        </View>
    );
};

export default AddTodo;
