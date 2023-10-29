import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ScreenProfile from '../screens/ScreenProfile/ScreenProfile';
import ScreenDescription from '../screens/ScreenDescription/ScreenDescription';
import AddTask from '../screens/ScreenAddTask/AddTask';



const Stack = createNativeStackNavigator();

const PublicStacks = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="ScreenProfile">
            <Stack.Screen name="ScreenProfile" component={ScreenProfile} />
            <Stack.Screen name="AddTask" component={AddTask} />
            <Stack.Screen name="ScreenDescription" component={ScreenDescription} />
        </Stack.Navigator>
    );
};

export default PublicStacks;