const convertFirebaseDataToChartsData = (dataObject, time) => {
  const result = {};
  let timeSecondsSinceEpoch;
  try {
    timeSecondsSinceEpoch = Date.parse(dataObject.timeStamp) / 1000;
  } catch (error) {
    timeSecondsSinceEpoch = time;
  }
  if (dataObject.dust) {
    result.dust = {
      time: timeSecondsSinceEpoch,
      value: dataObject.dust,
    };
  }
  if (dataObject.moisture) {
    result.moisture = {
      time: timeSecondsSinceEpoch,
      value: dataObject.moisture,
    };
  }
  if (dataObject.valve) {
    result.valve = {
      time: timeSecondsSinceEpoch,
      value: dataObject.valve == true ? 1 : 0,
    };
  }
  if (dataObject.distance) {
    result.distance = {
      time: timeSecondsSinceEpoch,
      value: dataObject.distance,
    };
  }
  return result;
};

export { convertFirebaseDataToChartsData };
