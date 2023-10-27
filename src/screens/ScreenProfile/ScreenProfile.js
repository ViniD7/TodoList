import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTodo } from '../../hooks/useTodo';
import TodoItem from '../../components/TodoItem/TodoItem';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';

const ScreenProfile = () => {
    const { state, dispatch } = useTodo();
    const { tasks } = state;
    const [loading, setLoading] = useState(true);

    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks) {
                dispatch({ type: 'LOAD_INITIAL_TASKS', payload: JSON.parse(savedTasks) });
            }
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const deleteTask = async (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        dispatch({ type: 'DELETE_TASK', payload: taskId });

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const editTask = async (taskId, editedTitle, editedDescription) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, title: editedTitle, description: editedDescription };
            }
            return task;
        });
        dispatch({ type: 'EDIT_TASK', payload: { id: taskId, title: editedTitle, description: editedDescription } });

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const completeTask = async (taskId) => {
        console.log(taskId)
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        dispatch({ type: 'COMPLETE_TASK', payload: taskId });

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Carregando tarefas...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.organizeTask}>
                <View style={styles.titlePending}>
                    <Text style={styles.task}>Tarefas Pendentes</Text>
                    <MaterialIcons name='pending-actions' size={20} color='white' />
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TodoItem
                            task={item}
                            onDelete={deleteTask}
                            onEdit={editTask}
                            onComplete={completeTask}
                        />
                    )}
                />
            </View>
            <AddButton />
        </View>
    );
};

export default ScreenProfile;
