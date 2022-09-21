import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const pushAttendance = async (recordArray: any[], setRecordFunc: any) => {
  // date generator
  const date = new Date();
  const realtime = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  // android location permission request
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    console.log(granted);
  }

  // get location information
  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      return setRecordFunc([
        ...recordArray,
        {time: realtime, location: location},
      ]);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};

export default pushAttendance;
