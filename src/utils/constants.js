// Students Per State

export const barData = {
  labels: ['SP', 'RJ', 'MG', 'RS'],
  datasets: [
    {
      label: 'Desempenho Médio',
      data: [85, 78, 80, 87],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const barOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Private Schools vs public Schools

export const pieData = {
  labels: ['Públicas', 'Privadas'],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
    },
  ],
};

export const pieOptions = {};

// age, gender and race

export const lineData = {
  labels: ['15 anos', '16 anos', '17 anos'],
  datasets: [
    {
      label: 'Sexo',
      data: [78, 82, 81],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1,
    },
    {
      label: 'Raça',
      data: [80, 83, 79],
      fill: false,
      borderColor: 'rgba(153, 102, 255, 1)',
      tension: 0.1,
    },
  ],
};

export const lineOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// year tendencies

export const trendData = {
  labels: ['2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Tendência de Desempenho',
      data: [75, 78, 80, 82],
      fill: false,
      borderColor: 'rgba(255, 159, 64, 1)',
      tension: 0.1,
    },
  ],
};

export const trendOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
