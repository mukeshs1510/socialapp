import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import Snackbar from 'react-native-snackbar';
import {ScrollView} from 'react-native-gesture-handler';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState();
  const [passwrd, setPasswrd] = useState();

  const {login, googleSignIn, facebookSignIn} = useContext(AuthContext);

  const _handleLoginFormality = () => {
    if (!email && !passwrd) {
      Snackbar.show({
        text: 'Please provide your email and password',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      login(email, passwrd);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>React Native UI</Text>

        <FormInput
          lableValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          lableValue={passwrd}
          onChangeText={(userPassword) => setPasswrd(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign in"
          onPress={() => _handleLoginFormality()}
        />

        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.forgetButtn}
          onPress={() => {}}>
          <Text style={styles.navBtnText}>Forget Password?</Text>
        </TouchableOpacity>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign in with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => facebookSignIn()}
            />
            <SocialButton
              buttonTitle="Sign in with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {
                googleSignIn();
              }}
            />
          </View>
        ) : null}

        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.forgetButtn}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navBtnText}>
            Don't have an account? Create one
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },

  text: {
    fontFamily: 'Kufam-SamiBoldItalic',
    fontSize: 20,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgetButtn: {
    marginVertical: 35,
  },
  navBtnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
