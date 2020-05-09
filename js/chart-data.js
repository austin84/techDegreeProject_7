// ! Traffic Chart Data

let hourlyTrafficData = {
  labels: [
    "12am-2am",
    "2am-4am",
    "4am-6am",
    "6am-8am",
    "8am-10am",
    "10am-12pm",
    "12pm-2pm",
    "2pm-4pm",
    "4pm-6pm",
    "6pm-8pm",
    "8pm-10pm",
    "10pm-12am",
  ],
  datasets: [
    {
      data: [11, 10, 9, 13, 16, 14, 18, 20, 16, 18, 15, 14, 12, 11],
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

let dailyTrafficData = {
  labels: [
    "Apr. 25",
    "Apr. 26",
    "Apr. 27",
    "Apr. 28",
    "Apr. 29",
    "Apr. 30",
    "May 1",
  ],
  datasets: [
    {
      data: [75, 115, 175, 125, 225, 200, 100],
      pointStyle: "circle",
      pointBackgroundColor: [
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
      ],
      pointRadius: 6,
      backgroundColor: ["rgba(116, 119, 191, .3)"],
      borderColor: ["#7377BF"],
      borderWidth: 1,
      lineTension: 0,
    },
  ],
};

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

let monthlyTrafficData = {
  labels: [
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
  ],
  datasets: [
    {
      data: [
        4432,
        3455,
        5102,
        4322,
        6785,
        7855,
        6011,
        6654,
        7034,
        6899,
        9165,
        7010,
        9003,
        8945,
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

let trafficOptions = {
  aspectRatio: 2.5,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 13,
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
