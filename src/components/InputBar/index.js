import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import styles from './styles';

const InputBar = ({placeholder, value, onChangeText}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        paddingHorizontal={10}
      />
    </SafeAreaView>
  );
};

export default InputBar;
