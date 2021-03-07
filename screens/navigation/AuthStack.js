import AsyncStorage from '@react-native-community/async-storage';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import LoginPage from '../pages/LoginPage';
import OnboardingScreen from '../pages/OnboardingScreen';
import SignupPage from '../pages/SignupPage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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

    GoogleSignin.configure({
      webClientId:
        '368791878124-8gan886kisjjbmo7uutp1fugkg0lujud.apps.googleusercontent.com',
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
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

// options={({navigation}) => ({
//   title: '',
//   headerStyle: {
//     backgroundColor: '#f9fafd',
//     shadowColor: '#f9fafd',
//     elevation: 0,
//   },
//   headerLeft: () => (
//     <View style={{marginLeft: 10}}>
//       <FontAwesome.Button
//         name="long-arrow-left"
//         size={25}
//         backgroundColor="#f9fafd"
//         color="#333"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   ),
// })}
