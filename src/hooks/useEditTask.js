import { useTodo } from './useTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useEditTask = () => {
    const { state, dispatch } = useTodo();
    const { tasks } = state;

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

    return { editTask };
};

export default useEditTask;

