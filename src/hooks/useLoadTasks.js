import { useEffect, useState } from 'react';
import { useTodo } from './useTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLoadTasks = () => {
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

    return { loading, tasks };
};

export default useLoadTasks;
