import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import AddTodo from '../../components/AddTodo/AddTodo';

const TodoList = () => {


  return (
    <View style={styles.container}>
      <BackButton title={'Voltar'} />
      <AddTodo />
    </View>
  );
};

export default TodoList;
