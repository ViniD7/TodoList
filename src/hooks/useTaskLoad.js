import { useEffect } from 'react';
import { useTodo } from './useTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTaskLoad = () => {
    const { dispatch } = useTodo();

    useEffect(() => {
        const loadTasksFromStorage = async () => {
            try {
                const tasksFromStorage = await AsyncStorage.getItem('tasks');
                if (tasksFromStorage) {
                    dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(tasksFromStorage) });
                }
            } catch (error) { }
        };

        loadTasksFromStorage();
    }, [dispatch]);

    return { loadTasksFromStorage };
};

export default useTaskLoad;
