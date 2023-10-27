import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ScreenProfile from '../screens/ScreenProfile/ScreenProfile';
import TodoList from '../screens/Home/TodoList';
import ScreenDescription from '../screens/ScreenDescription/ScreenDescription';



const Stack = createNativeStackNavigator();

const PublicStacks = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="ScreenProfile">
            <Stack.Screen name="ScreenProfile" component={ScreenProfile} />
            <Stack.Screen name="TodoList" component={TodoList} />
            <Stack.Screen name="ScreenDescription" component={ScreenDescription} />
        </Stack.Navigator>
    );
};

export default PublicStacks;