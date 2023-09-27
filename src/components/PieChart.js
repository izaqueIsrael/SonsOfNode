import { useEffect, useRef } from 'react';
import {
  Chart,
  ArcElement,
  PieController,
  CategoryScale,
  Tooltip,
} from 'chart.js';

Chart.register(ArcElement, PieController, CategoryScale, Tooltip);

const PieChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: 'pie',
        data: data,
        options: options,
      });
    }
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
