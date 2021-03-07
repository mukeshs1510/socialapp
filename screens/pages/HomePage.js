/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const HomePage = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
      }}>
      <Text>Hello User</Text>
      <Text>your user id is: {user.uid}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
};
export default HomePage;
