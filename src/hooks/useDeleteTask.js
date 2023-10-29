import { useTodo } from './useTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useDeleteTask = () => {
    const { state, dispatch } = useTodo();
    const { tasks } = state;

    const deleteTask = async (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        dispatch({ type: 'DELETE_TASK', payload: taskId });

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return { deleteTask };
};

export default useDeleteTask;
