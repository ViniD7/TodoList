import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';


const ScreenDescription = ({ route }) => {
    const { titleTodo, descriptionTodo } = route.params;

    return (
        <View style={styles.container}>
            <BackButton title={'Tarefas'} />
            <ScrollView>
                <View>
                    <Text style={styles.title}>{titleTodo}</Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{descriptionTodo}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ScreenDescription;









