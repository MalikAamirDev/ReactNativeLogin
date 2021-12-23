import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../Screens/styles';

const Input = ({placeholder}) => {
  return (
    <View>
      <TextInput style={styles.Input} placeholder={placeholder} />
    </View>
  );
};

export default Input;
