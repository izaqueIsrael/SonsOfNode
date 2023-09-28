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

// Questions

export const questions = [
  {
    question:
      'Uma fábrica produziu um lote de camisetas. Se 40% das camisetas são azuis e o restante são vermelhas, quantas camisetas vermelhas existem em um lote de 500 camisetas?',
    options: ['200', '250', '300', '350', '400'],
    answer: '350',
    feedback:
      'Você errou essa questão, pode estar enfrentando dificuldades em calcular porcentagens. Revise o conceito de percentual e prática em diversos contextos.',
  },
  {
    question:
      'Uma reta corta o eixo x no ponto (3,0) e o eixo y no ponto (0,2). Qual é a equação dessa reta?',
    options: [
      'y = 2x + 2',
      'y = -2/3x + 2',
      'y = 3/2x',
      'y = -3x + 2',
      'y = 2/3x - 2',
    ],
    answer: 'y = -2/3x + 2',
    feedback:
      'Você errou essa questão, pode ser necessário revisar a forma de encontrar a equação de uma reta usando dois pontos. Familiarize-se com a fórmula da inclinação e o conceito de interceptação.',
  },
  {
    question: 'Uma caixa cúbica tem aresta de 4 cm. Qual é o volume da caixa?',
    options: ['16 cm³', '32 cm³', '48 cm³', '64 cm³', '128 cm³'],
    answer: '64 cm³',
    feedback:
      'Você errou essa questão, pode ser necessário revisar o conceito de volume de sólidos geométricos, em especial o cálculo do volume de um cubo.',
  },
  {
    question:
      'Um triângulo tem lados de comprimentos 3 cm, 4 cm e 5 cm. Qual é a natureza desse triângulo?',
    options: [
      'Equilátero',
      'Isósceles',
      'Escaleno obtusângulo',
      'Escaleno acutângulo',
      'Escaleno retângulo',
    ],
    answer: 'Escaleno retângulo',
    feedback:
      'Você errou essa questão, pode estar enfrentando dificuldades em classificar triângulos com base na medida de seus lados e ângulos. Lembre-se do Teorema de Pitágoras e de como ele se aplica a triângulos retângulos.',
  },
  {
    question:
      'Se o gráfico de uma função quadrática (parábola) abre para cima e o valor de sua discriminante é negativo, quantas raízes reais essa função possui?',
    options: ['Nenhuma', 'Uma', 'Duas', 'Três', 'Quatro'],
    answer: 'Nenhuma',
    feedback:
      'Você errou essa questão, revise o conceito de discriminante em funções quadráticas e como ele determina o número e natureza das raízes da função. Além disso, lembre-se da relação entre o sinal da discriminante e o número de raízes reais da função.',
  },
];
