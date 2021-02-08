import AsyncStorage from '@react-native-community/async-storage';
import {
  createStackNavigator,
  HeaderTitle,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import LoginPage from '../screens/LoginPage';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupPage from '../screens/SignupPage';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFIrstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFIrstLaunch(true);
      } else {
        setIsFIrstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupPage}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
