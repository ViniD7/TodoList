import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TodoProvider } from './src/hooks/useTodo';
import Stacks from './src/navigation/routes';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <TodoProvider>
        <Stacks />
      </TodoProvider>
    </NavigationContainer>
  );
};

export default App;
