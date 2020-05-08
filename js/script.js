// * Alert Bar
const alertBar = document.getElementById("alert-bar");
const alertClose = document.getElementById("alert-close");

function closeAlertListener() {
  alertClose.addEventListener("click", (e) => {
    alertBar.removeAttribute("class");
    alertBar.innerHTML = "";
  });
}
closeAlertListener();

// * Traffic Chart
var tlg = document.getElementById("traffic-graph").getContext("2d");

var trafficLineGraph = new Chart(tlg, {
  type: "line",
  data: {
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
  },
  options: {
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
  },
});

// * Daily Chart
var dbc = document.getElementById("daily-graph").getContext("2d");

var dailyBarChart = new Chart(dbc, {
  type: "bar",
  data: {
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
  },
  options: {
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
  },
});

// * Mobile Chart
var mdc = document.getElementById("mobile-graph").getContext("2d");

var trafficLineGraph = new Chart(mdc, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablets", "Phones"],
    datasets: [
      {
        data: [2000, 550, 500],
        backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
        borderWidth: 0,
      },
    ],
  },
  options: {
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
  },
});

// * Messaging
const user = document.getElementById("message-search");
const message = document.getElementById("message-text");
const send = document.getElementById("send");

send.addEventListener("click", (e) => {
  if (user.value === "" && message.value === "") {
    event.preventDefault();
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    event.preventDefault();
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    event.preventDefault();
    alert("Please fill out message field before sending");
  } else {
    event.preventDefault();
    alert(`Message successfully sent to: ${user.value}`);
    location.reload();
  }
});

// * Notifications
const bell = document.querySelector(".bell");
const showDropDown = () => {
  document.getElementById("dropdown-content").classList.toggle("show");
};
const notifications = () => {
  bell.addEventListener("click", (e) => {
    const not1 = document.getElementById("not1");
    const not2 = document.getElementById("not2");
    const greenDot = document.getElementById("notifications");
    const clear = document.getElementById("notification-clear");
    const close = document.getElementById("notification-close");
    const dropdown = document.getElementById("dropdown-content");

    showDropDown();

    clear.addEventListener("click", (e) => {
      not1.textContent = "";
      not2.textContent = "";
      greenDot.style.display = "none";
      showDropDown();
    });

    close.addEventListener("click", (e) => {
      showDropDown();
    });
  });
};

notifications();

// ! working on getting the close button to work more than once, could move on to traffic nav ^^^^^^^^^^^
