import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState();
  const [passwrd, setPasswrd] = useState();

  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={require('../images/firr.png')} style={styles.logo} />
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

      <FormButton buttonTitle="Sign in" onPress={() => login(email, passwrd)} />

      <TouchableOpacity style={styles.forgetButtn} onPress={() => {}}>
        <Text style={styles.navBtnText}>Forget Password?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign in with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      <SocialButton
        buttonTitle="Sign in with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.forgetButtn}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navBtnText}>Don't have an account? Create one</Text>
      </TouchableOpacity>
    </View>
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
