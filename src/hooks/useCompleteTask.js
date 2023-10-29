import { useTodo } from './useTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCompleteTask = () => {
    const { state, dispatch } = useTodo();
    const { tasks } = state;

    const completeTask = async (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        dispatch({ type: 'COMPLETE_TASK', payload: taskId });

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return { completeTask };
};

export default useCompleteTask;
