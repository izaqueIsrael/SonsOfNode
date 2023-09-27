import { useEffect, useRef } from 'react';
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';

Chart.register(BarController, BarElement, LinearScale, CategoryScale);

const BarChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: 'bar',
        data: data,
        options: options,
      });
    }
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
