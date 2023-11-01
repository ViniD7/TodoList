import { useState } from 'react';
import { useTodo } from './useTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSaveTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { state, dispatch } = useTodo();
    const { tasks } = state;
    const [showModal, setShowModal] = useState(false);

    const saveTask = async () => {
        if (title.trim() === '' || description.trim() === '') {
            return;
        }

        const newTask = { id: Date.now().toString(), title, description };
        dispatch({ type: 'ADD_TASK', payload: newTask });

        const updatedTasks = [...tasks, newTask];
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

        setTitle('');
        setDescription('');

        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 1900);
    };


    return {
        saveTask,
        setDescription,
        description,
        setTitle,
        title,
        showModal
    }
};

export default useSaveTask;
