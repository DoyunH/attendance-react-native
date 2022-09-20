import {SafeAreaView, StyleSheet, Button, View, Platform} from 'react-native';
import React from 'react';
import CustomButton from './components/CustomButton';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton onPress={() => console.log()}>Attendance</CustomButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
