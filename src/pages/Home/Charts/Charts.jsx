import React, { useEffect, useState } from "react";
import styles from "./Charts.module.css";
import { AreaChart, BaseLineChart } from "./components/Chart";
import {
  fetchRealtimeDbData,
  listenRealtimeDbData,
  realtimeDBMockData,
} from "../../../services/firebase/realtimeDB";
import { convertFirebaseDataToChartsData } from "../../../services/firebase/utils";

const Charts = () => {
  const [dustInitialData, setDustInitialData] = useState([]);
  const [moistureInitialData, setMoistureInitialData] = useState([]);
  const [distanceInitialData, setDistanceInitialData] = useState([]);
  const [valveInitialData, setValveInitialData] = useState([]);
  const [updateDustData, setUpdateDustData] = useState(null);
  const [updateMoistureData, setUpdateMoistureData] = useState(null);
  const [updateDistanceData, setUpdateDistanceData] = useState(null);
  const [updateValveData, setUpdateValveData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRealtimeDbData().then((realtimeDBData) => {
      const chartsData = Object.values(realtimeDBData).map((data, index) =>
        convertFirebaseDataToChartsData(
          data,
          Math.floor((index * 1e6 + Date.now()) / 1000)
        )
      );
      setDustInitialData(
        chartsData
          .map((data) => data.dust)
          .filter((data) => data !== undefined && data !== null)
      );
      setMoistureInitialData(
        chartsData
          .map((data) => data.moisture)
          .filter((data) => data !== undefined && data !== null)
      );
      setDistanceInitialData(
        chartsData
          .map((data) => data.distance)
          .filter((data) => data !== undefined && data !== null)
      );
      setValveInitialData(
        chartsData
          .map((data) => data.valve)
          .filter((data) => data !== undefined && data !== null)
      );

      listenRealtimeDbData((realtimeData) => {
        const chartsData = convertFirebaseDataToChartsData(realtimeData);
        setUpdateDustData(chartsData.dust);
        setUpdateMoistureData(chartsData.moisture);
        setUpdateDistanceData(chartsData.distance);
        setUpdateValveData(chartsData.valve);
      });
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div className={styles.loading}>Loading...</div>
  ) : (
    <div className={styles.charts}>
      <AreaChart
        title="Moisture"
        initialData={moistureInitialData}
        colors={{
          topColor: "rgba(41, 98, 255, 0.56)",
          bottomColor: "rgba(41, 98, 255, 0.1)",
          lineColor: "rgba(41, 98, 255, 1)",
        }}
        updateData={updateMoistureData}
      />
      <BaseLineChart
        title="Distance"
        initialData={distanceInitialData}
        baseValue={250}
        colors={{
          topLineColor: "rgba(233, 30, 99, 1)",
          bottomLineColor: "rgba(38, 198, 218, 1)",
          topFillColor1: "rgba(233, 30, 99, 0.56)",
          topFillColor2: "rgba(233, 30, 99, 0.1)",
          bottomFillColor1: "rgba(38, 198, 218, 0.56)",
          bottomFillColor2: "rgba(38, 198, 218, 0.1)",
        }}
        updateData={updateDistanceData}
      />
      <AreaChart
        title="Dust"
        initialData={dustInitialData}
        colors={{
          topColor: "rgba(247, 82, 95, 0.56)",
          bottomColor: "rgba(247, 82, 95, 0.1)",
          lineColor: "rgba(247, 82, 95, 1)",
        }}
        updateData={updateDustData}
      />
      <AreaChart
        title="Valve"
        initialData={valveInitialData}
        colors={{
          topColor: "rgba(171, 71, 188, 0.56)",
          bottomColor: "rgba(171, 71, 188, 0.1)",
          lineColor: "rgba(171, 71, 188, 1)",
        }}
        updateData={updateValveData}
      />
    </div>
  );
};

export default Charts;
