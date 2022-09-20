import Geolocation from '@react-native-community/geolocation';

const pushAttendance = (recordArray: any[], setRecordFunc: any) => {
  const date = new Date();
  const realtime = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  console.log(recordArray);
  Geolocation.getCurrentPosition(position => {
    const location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    return setRecordFunc([
      ...recordArray,
      {time: realtime, location: location},
    ]);
  });
};

export default pushAttendance;
