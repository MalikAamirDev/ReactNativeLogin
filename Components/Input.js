import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import styles from '../stylings';

// const styles = StyleSheet.create(styling);

const Input = ({
  style,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  value,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        style={style}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
