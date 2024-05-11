import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';



const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ["ON", "PB95", "PB98", "LPG"];
    const yValues = [45, 30, 15, 10];
    const barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
    ];

    const myChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins: {
          title: {
            display: false,
            text: "World Wide Wine Production 2018"
          }
        }
      }
    });

    // Zwróć funkcję czyszczenia, aby usunąć wykres podczas odmontowywania komponentu
    return () => myChart.destroy();
  }, []); // Pusta tablica zależności oznacza, że ​​efekt będzie wywoływany tylko raz po zamontowaniu komponentu

  return <canvas ref={chartRef} id="myChart" />;
};

export default DoughnutChart;
