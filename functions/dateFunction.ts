function pushAttendance(recordArray: any[], setRecordFunc: any) {
  const date = new Date();
  const realtime = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log(realtime);
  console.log(recordArray);
  // return array.push(realtime);
  return setRecordFunc([...recordArray, realtime]);
}

export default pushAttendance;
