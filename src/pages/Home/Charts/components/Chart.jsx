import React, { useEffect, useRef, useState } from "react";
import styles from "./../Charts.module.css";
import { createChart } from "lightweight-charts";

const AreaChart = ({ title, initialData, colors, updateData }) => {
  const chartRef = useRef(null);
  const [areaSeries, setAreaSeries] = useState(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chartRef.current) return;
    if (!chart) return;
    if (!areaSeries) return;
    if (!updateData) return;
    areaSeries.update(updateData);
  }, [updateData]);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = createChart(chartRef.current, {
      name: "Chart",
      width: chartRef.current.offsetWidth,
      height: chartRef.current.offsetHeight,
      layout: {
        background: {
          type: "solid",
          color: "#000",
        },
        textColor: "#D9D9D9",
      },
      grid: {
        vertLines: {
          color: "rgba(197, 203, 206, 0.05)",
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.05)",
        },
      },
      crosshair: {
        mode: "normal",
      },
      rightPriceScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
      timeScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
    });

    const areaSeries = chart.addAreaSeries({
      topColor: colors?.topColor || "rgba(255, 255, 255, 0.56)",
      bottomColor: colors?.bottomColor || "rgba(255, 255, 255, 0.1)",
      lineColor: colors?.lineColor || "rgba(255, 255, 255, 1)",
      lineWidth: 2,
    });

    areaSeries.setData(initialData || []);

    // chart.timeScale().fitContent();

    setAreaSeries(areaSeries);
    setChart(chart);

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div className={styles.chart_wrapper}>
      <div className={styles.chart_title}>{title || "Chart"}</div>
      <div ref={chartRef} className={styles.chart}></div>
    </div>
  );
};

const BaseLineChart = ({
  title,
  initialData,
  colors,
  updateData,
  baseValue,
}) => {
  const chartRef = useRef(null);
  const [baselineSeries, setBaselineSeries] = useState(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chartRef.current) return;
    if (!chart) return;
    if (!baselineSeries) return;
    if (!updateData) return;
    baselineSeries.update(updateData);
  }, [updateData]);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = createChart(chartRef.current, {
      name: "Chart",
      width: chartRef.current.offsetWidth,
      height: chartRef.current.offsetHeight,
      layout: {
        background: {
          type: "solid",
          color: "#000",
        },
        textColor: "#D9D9D9",
      },
      grid: {
        vertLines: {
          color: "rgba(197, 203, 206, 0.05)",
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.05)",
        },
      },
      crosshair: {
        mode: "normal",
      },
      rightPriceScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
      timeScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
    });

    const baselineSeries = chart.addBaselineSeries({
      topLineColor: colors?.topLineColor || "rgba(255, 255, 255, 0.56)",
      bottomLineColor: colors?.bottomLineColor || "rgba(255, 255, 255, 0.1)",
      topFillColor1: colors?.topFillColor1 || "rgba(255, 255, 255, 0.56)",
      topFillColor2: colors?.topFillColor2 || "rgba(255, 255, 255, 0.56)",
      bottomFillColor1: colors?.bottomFillColor1 || "rgba(255, 255, 255, 0.1)",
      bottomFillColor2: colors?.bottomFillColor2 || "rgba(255, 255, 255, 0.1)",
      baseValue: {
        price: baseValue || 0,
      },
      lineWidth: 2,
    });

    baselineSeries.setData(initialData || []);

    // chart.timeScale().fitContent();

    setBaselineSeries(baselineSeries);
    setChart(chart);

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div className={styles.chart_wrapper}>
      <div className={styles.chart_title}>{title || "Chart"}</div>
      <div ref={chartRef} className={styles.chart}></div>
    </div>
  );
};

export { AreaChart, BaseLineChart };
