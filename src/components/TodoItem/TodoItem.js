import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTodo } from '../../hooks/useTodo';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

const TodoItem = ({ task, onDelete, onComplete, onEdit }) => {
    const { dispatch } = useTodo();
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [isEditingDescription, setIsEditingDescription] = useState(false); // Adicione essa linha
    const [editedDescription, setEditedDescription] = useState(task.description);
    const navigation = useNavigation();


    const handleEdit = () => {
        if (isEditing) {
            dispatch({
                type: 'EDIT_TASK',
                payload: {
                    id: task.id,
                    title: editedTitle,
                    description: editedDescription,
                },
            });
            onEdit(task.id, editedTitle, editedDescription);
        }
        setIsEditing(!isEditing);
    };


    const handleComplete = () => {
        onComplete(task.id)
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    const handleEditDescription = () => {
        if (isEditingDescription) {
            dispatch({
                type: 'EDIT_TASK',
                payload: {
                    id: task.id,
                    title: editedTitle,
                    description: editedDescription,
                },
            });
            onEdit(task.id, editedTitle, editedDescription);
        }
        setIsEditingDescription(!isEditingDescription);
    };

    return (
        <View style={styles.organize}>
            <View style={styles.taskContainer}>
                {isEditing ? (
                    <TextInput
                        style={styles.editTaskText}
                        value={editedTitle}
                        onChangeText={(text) => setEditedTitle(text)}
                    />
                ) : (
                    <Text
                        onPress={() => navigation.navigate('ScreenDescription', {
                            titleTodo: task.title,
                            descriptionTodo: task.description
                        })}
                        style={styles.taskText}
                    >
                        {task.title && truncateText(task.title, 20)}
                    </Text>
                )}

                <TouchableOpacity onPress={handleComplete}>
                    {task.completed ? (
                        <MaterialCommunityIcons name="check-bold" size={30} color={'rgb(0, 255, 132)'} />
                    ) : (
                        <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={30} color={'white'} />
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.organizeOptions}>
                <TouchableOpacity
                    onPress={handleEdit}
                    style={{ ...styles.options, backgroundColor: 'rgb(70, 21, 175)' }}
                >
                    {isEditing ? (
                        <AntDesign name="check" size={20} color="rgb(0, 255, 132)" />
                    ) : (
                        <AntDesign name="edit" size={23} color="white" />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete} style={{ ...styles.options, backgroundColor: 'red' }}>
                    <AntDesign name="delete" size={20} color="white" />
                </TouchableOpacity>
            </View>
            {isEditingDescription ? (
                <TextInput
                    style={styles.editTaskText}
                    value={editedDescription}
                    onChangeText={(text) => setEditedDescription(text)}
                />
            ) : (
                <Text
                    onPress={() => navigation.navigate('ScreenDescription', {
                        titleTodo: task.title,
                        descriptionTodo: task.description
                    })}
                    style={styles.taskText}
                >
                    {isEditingDescription ? (
                        <TextInput
                            style={styles.editTaskText}
                            value={editedDescription}
                            onChangeText={(text) => setEditedDescription(text)}
                        />
                    ) : (
                        <Text
                            onPress={() => navigation.navigate('ScreenDescription', {
                                titleTodo: task.title,
                                descriptionTodo: task.description
                            })}
                            style={styles.taskText}
                        >
                            {task.description && truncateText(task.description, 50)}
                        </Text>
                    )}
                </Text>
            )}
            <TouchableOpacity
                onPress={handleEditDescription}
                style={{ ...styles.options, backgroundColor: 'rgb(70, 21, 175)' }}
            >
                {isEditingDescription ? (
                    <AntDesign name="check" size={20} color="rgb(0, 255, 132)" />
                ) : (
                    <AntDesign name="edit" size={23} color="white" />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default TodoItem;
