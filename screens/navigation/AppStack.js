import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomePage from '../pages/HomePage';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default AppStack;
