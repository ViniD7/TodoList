import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TodoProvider } from './src/hooks/useTodo';
import PublicStacks from './src/navigation/routes';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <TodoProvider>
        <PublicStacks />
      </TodoProvider>
    </NavigationContainer>
  );
};

export default App;
