import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import CustomButton from './components/CustomButton';
import pushAttendance from './functions/dateFunction';

const App = () => {
  const [attandance, setAttandance] = React.useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton onPress={() => pushAttendance(attandance, setAttandance)}>
        Attendance
      </CustomButton>
      <View style={styles.mapContainer}>
        {attandance.map((item, index) => (
          <View style={styles.recordContainer} key={index}>
            <Text>Time : {item.time}</Text>
            <Text>lantitud : {item.location.latitude}</Text>
            <Text>longitud : {item.location.longitude}</Text>
          </View>
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
  mapContainer: {
    alignSelf: 'stretch',
  },
  recordContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: '#65b867',
  },
  recordText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default App;
