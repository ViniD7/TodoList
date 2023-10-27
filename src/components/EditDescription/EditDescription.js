import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTodo } from '../../hooks/useTodo';
import { useNavigation } from '@react-navigation/native';

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

const EditedDescription = ({ task, onDelete, onComplete, onEdit }) => {
    const { dispatch } = useTodo();
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const navigation = useNavigation();

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
                style={styles.options}
            >
                <Text>EDITAR</Text>
                {isEditingDescription ? (
                    <AntDesign name="check" size={20} color="rgb(0, 255, 132)" />
                ) : (
                    <AntDesign name="edit" size={23} color="white" />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default EditedDescription;
