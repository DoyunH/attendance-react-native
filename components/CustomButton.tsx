import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type CustomButtonProps = {
  children: string;
  onPress: () => void;
};

const CustomButton = ({onPress, children}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: '#f8c44c',
  },
});
