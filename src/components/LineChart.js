import { useEffect, useRef } from 'react';
import {
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
);

const LineChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: 'line',
        data: data,
        options: options,
      });
    }
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
