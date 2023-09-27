// 1- Média FInal à ano de conclusão do EM - BARRA

export const FinalAverageByYearData = {
  labels: [
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    'Antes de 2007',
  ],
  datasets: [
    {
      label: 'Média Final',
      data: [
        402.7262, 383.0761, 352.4194, 335.2306, 317.9412, 299.7983, 294.8535,
        292.7209, 278.5408, 286.2035, 285.4399, 260.4021, 252.4535, 254.2205,
        263.3209, 275.6096,
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

export const FinalAverageByYearOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Média Final em relação à Ano de Conclusão do EM',
    },
  },
};

// 2- Média FInal em Relação a Idade - BARRA

export const FinalAverageByAgeData = {
  labels: [
    'Menor de 17 anos',
    '17 anos',
    '18 anos',
    '19 anos',
    '20 anos',
    '21 anos',
    '22 anos',
    '23 anos',
    '24 anos',
    '25 anos',
    'Entre 26 e 30 anos',
    'Entre 31 e 35 anos',
    'Entre 36 e 40 anos',
    'Entre 41 e 45 anos',
    'Entre 46 e 50 anos',
    'Entre 51 e 55 anos',
    'Entre 56 e 60 anos',
    'Entre 61 e 65 anos',
    'Entre 66 e 70 anos',
    'Maior de 70 anos',
  ],
  datasets: [
    {
      label: 'Média Final por Idade',
      data: [
        480.5985, 460.0904, 413.7776, 366.1274, 355.5979, 329.1103, 314.0113,
        311.2924, 263.1824, 274.4474, 258.4758, 243.0862, 246.5358, 285.571,
        260.1415, 252.8698, 257.3951, 350.1632, 262.1429, 312.915,
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

export const FinalAverageByAgeOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Média Final em relação à idade',
    },
  },
};

// 3- Média FInal em relação a Redação - LINHA

export const FinalAverageByTextsData = {
  labels: [
    'Menor que 400',
    'Menor que 500',
    'Menor que 600',
    'Menor que 700',
    'Menor que 800',
    'Menor que 900',
    'Maior ou igual que 901',
  ],
  datasets: [
    {
      label: 'Média Final por Nota de Redação',
      data: [441, 468, 510, 549, 590, 638, 685],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
  ],
};

export const FinalAverageByTextsOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Média Final em relação à Redação',
    },
  },
};

// 4- Media final em relação a matemática - LINHA

export const FinalAverageByMathData = {
  labels: [
    'Menor que 400',
    'Menor que 500',
    'Menor que 600',
    'Menor que 700',
    'Menor que 800',
    'Menor que 900',
    'Maior ou igual que 901',
  ],
  datasets: [
    {
      label: 'Média Final por Nota de Matemática',
      data: [463, 497, 547, 606, 670, 731, 771],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

export const FinalAverageByMathOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Média Final em relação à Matemática',
    },
  },
};

// 5- Quantidade de homens x mulheres -PIE
export const ManAndWomanNumberData = {
  labels: ['Mulheres', 'Homens'],
  datasets: [
    {
      data: [2.12, 1.35],
      backgroundColor: ['#FFC0CB', '#1E90FF'],
      borderWidth: 1,
    },
  ],
};

export const ManAndWomanNumberOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Quantidade de Homens x Mulheres no ENEM em Milhões',
    },
  },
};

// 6- Média de homens vs mulheres - PIE
export const WomanAndManFinalAverageData = {
  labels: ['Mulheres', 'Homens'],
  datasets: [
    {
      label: 'Média Final',
      data: [378.8967, 379.8959],
      backgroundColor: ['#FFC0CB', '#1E90FF'],
      borderWidth: 1,
    },
  ],
};

export const WomanAndManFinalAverageOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Média Final: Homem X Mulher',
    },
  },
};

// 7- Média Final para o Tipo de Ensino - PIE
export const FinalMediaByListenTypeData = {
  labels: ['Ensino Regular', 'Ensino Especial'],
  datasets: [
    {
      label: 'Média Final',
      data: [42.8, 57.2],
      backgroundColor: ['#FFD700', '#808080'], // amarelo para ensino regular e cinza para ensino especial
      borderWidth: 1,
    },
  ],
};

export const FinalMediaByListenTypeOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Média Final x Tipo de Ensino',
    },
  },
};
