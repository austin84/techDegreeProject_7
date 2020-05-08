// ! Traffic Chart Data

let weeklyTrafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [
        0,
        750,
        1250,
        1000,
        1500,
        2000,
        1500,
        1750,
        1250,
        1750,
        2250,
        1750,
        2250,
      ],
      pointStyle: "circle",
      pointBackgroundColor: [
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
      ],
      pointBorderColor: [
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
      ],
      pointRadius: 6,
      backgroundColor: ["rgba(116, 119, 191, .3)"],
      borderColor: ["#7377BF"],
      borderWidth: 1,
      lineTension: 0,
    },
  ],
};

// ! Traffic Chart Options

let weeklyTrafficOptions = {
  aspectRatio: 2.5,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

// ! Daily Chart Data

let dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: [
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
      ],
      borderColor: [
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
        "#7377BF",
      ],
      borderWidth: 1,
    },
  ],
};

// ! Daily Chart Options

let dailyOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

// ! Mobile Chart Data

let mobileData = {
  labels: ["Desktop", "Tablets", "Phones"],
  datasets: [
    {
      data: [2000, 550, 500],
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
      borderWidth: 0,
    },
  ],
};

// ! Mobile Chart Options

let mobileOptions = {
  responsive: true,
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: "bold",
    },
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
