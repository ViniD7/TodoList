import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TodoItem from '../../components/TodoItem/TodoItem';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';
import useCompleteTask from '../../hooks/useCompleteTask';
import useDeleteTask from '../../hooks/useDeleteTask';
import useEditTask from '../../hooks/useEditTask';
import useLoadTasks from '../../hooks/useLoadTasks';

const ScreenProfile = () => {
    const { editTask } = useEditTask()
    const { completeTask } = useCompleteTask()
    const { deleteTask } = useDeleteTask()
    const { tasks } = useLoadTasks()


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
