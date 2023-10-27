import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTodo } from '../../hooks/useTodo';

const TodoDescription = ({ task, onDelete }) => {
    const { dispatch } = useTodo();
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleEdit = () => {
        if (isEditing) {
            dispatch({
                type: 'EDIT_TASK',
                payload: {
                    id: task.id,
                    title: editedTitle,
                    description: task.description,
                },
            });
        }
        setIsEditing(!isEditing);
    };

    const handleComplete = () => {
        dispatch({
            type: 'COMPLETE_TASK',
            payload: task.id,
        });
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <View>
            <Text style={styles.title}>{task.title}</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{task.description}</Text>
            </View>
        </View>
    );
};

export default TodoDescription;

