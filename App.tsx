import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import CustomButton from './components/CustomButton';
import pushAttendance from './functions/dateFunction';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [attandance, setAttandance] = React.useState([]);
  Geolocation.getCurrentPosition(info => console.log(info));
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton onPress={() => pushAttendance(attandance, setAttandance)}>
        Attendance
      </CustomButton>
      <View>
        {attandance.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default App;
