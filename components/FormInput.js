import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utilities/Dimentions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({lableValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        numberOfLines={1}
        value={lableValue}
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    width: 50,
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
  },
  input: {
    padding: 10,
    flex: 1,
    fontFamily: 'Lato-Regular',
    color: '#333',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
