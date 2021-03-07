import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import {ScrollView} from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';

const SignupPage = ({navigation}) => {
  const [email, setEmail] = useState();
  const [passwrd, setPasswrd] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register, googleSignIn, facebookSignIn} = useContext(AuthContext);

  const _handleSignup = () => {
    if (!email && !passwrd && !confirmPassword) {
      Snackbar.show({
        text: 'Please enter your email and password to register',
      });
    } else {
      register(email, passwrd);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>

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

        <FormInput
          lableValue={confirmPassword}
          onChangeText={(userConfrmPassword) =>
            setConfirmPassword(userConfrmPassword)
          }
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton buttonTitle="Sign up" onPress={() => _handleSignup()} />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <TouchableOpacity>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign up with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => facebookSignIn()}
            />
            <SocialButton
              buttonTitle="Sign up with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => googleSignIn()}
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navBtnText}>Already registered? Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    width: '100%',
    height: '100%',
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
  navBtnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },

  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
