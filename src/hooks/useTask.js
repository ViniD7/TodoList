import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const useTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const saveTask = async () => {
        if (title.trim() === '' || description.trim() === '') {
            return;
        }

        const newTask = { id: Date.now().toString(), title, description };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

        setTitle('');
        setDescription('');
    };

    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    };

    const deleteTask = async (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
    const editTask = async (taskId, newTitle, newDescription) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, title: newTitle, description: newDescription };
            }
            return task;
        });
        setTasks(updatedTasks);

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const completeTask = async (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);

        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return {
        saveTask, loadTasks, deleteTask, editTask, completeTask, title, setTitle, description, setDescription, tasks, setTasks
    }
}
export default useTask;