import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoContext = createContext();

const initialState = {
    tasks: [],
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_INITIAL_TASKS':
            return { tasks: action.payload };
        case 'ADD_TASK':
            return { tasks: [...state.tasks, action.payload] };
        case 'EDIT_TASK':
            const editedTasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, title: action.payload.title, description: action.payload.description };
                }
                return task;
            });
            return { tasks: editedTasks };
        case 'DELETE_TASK':
            const remainingTasks = state.tasks.filter((task) => task.id !== action.payload);
            return { tasks: remainingTasks };
        case 'COMPLETE_TASK':
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            return { tasks: updatedTasks };
        default:
            return state;
    }
};

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    useEffect(() => {
        const loadInitialTasks = async () => {
            try {
                const savedTasks = await AsyncStorage.getItem('tasks');
                if (savedTasks) {
                    dispatch({ type: 'LOAD_INITIAL_TASKS', payload: JSON.parse(savedTasks) });
                }
            } catch (error) {
                console.error('Erro ao carregar tarefas:', error);
            }
        };

        loadInitialTasks();
    }, []);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
    );
};

const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
};

export { TodoProvider, useTodo };
