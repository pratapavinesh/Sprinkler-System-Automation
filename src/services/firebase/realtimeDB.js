import { rtdb } from "./config";

const fetchRealtimeDbData = async () => {
  const snapshot = await rtdb.ref("user").once("value");
  const data = snapshot.val();
  return data;
};

const listenRealtimeDbData = (callback) => {
  if (typeof callback !== "function") return;
  rtdb.ref("user").on("value", (snapshot) => {
    if (snapshot.val() !== null) {
      callback(snapshot.val());
    }
  });
};

const stopListenRealtimeDbData = () => {
  rtdb.ref("user").off();
};

export { fetchRealtimeDbData, listenRealtimeDbData, stopListenRealtimeDbData };
