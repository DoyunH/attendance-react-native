import {Platform, PermissionsAndroid, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const requestPermissions = async () => {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization('whenInUse');
    if (auth === 'granted') {
      console.log('Permission granted');
    } else {
      console.log('Permission denied');
    }
  } else if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      switch (granted) {
        case PermissionsAndroid.RESULTS.GRANTED:
          console.log('Permission granted');
          break;
        case PermissionsAndroid.RESULTS.DENIED:
          console.log('Permission denied');
          break;
        case PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN:
          console.log('Permission revoked by user');
          break;
      }
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //   console.log('You can use the location');
      // } else {
      //   console.log(granted);
      //   Alert.alert("can't access to GPS title", 'returned ' + granted, [
      //     {text: 'ok'},
      //   ]);
      // }
    } catch (err) {
      console.warn(err);
    }
  }
};
