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

// * Local Storage
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let timezone = document.getElementById("timezone");
let saveButton = document.getElementById("save");
let cancelButton = document.getElementById("cancel");
saveButton.addEventListener("click", (e) => {
  const cb1 = checkbox1.checked;
  const cb2 = checkbox2.checked;
  const tz = timezone.value;
  localStorage.setItem("checkbox1", cb1);
  localStorage.setItem("checkbox2", cb2);
  localStorage.setItem("timezone", tz);
});

cancelButton.addEventListener("click", (e) => {
  localStorage.clear();
  let cb1 = checkbox1.checked;
  let cb2 = checkbox2.checked;
  if (cb1) {
    checkbox1.checked = false;
  }
  if (cb2) {
    checkbox2.checked = false;
  }
  timezone.value = "";
});

function restoreSettings() {
  let cb1 = localStorage.getItem("checkbox1") === "true";
  let cb2 = localStorage.getItem("checkbox2") === "true";
  let tz = localStorage.getItem("timezone");
  if (cb1) {
    checkbox1.setAttribute("checked", true);
  }
  if (cb2) {
    checkbox2.setAttribute("checked", true);
  }
  timezone.value = tz;
}
window.onload = restoreSettings();

// * Daily Chart
var dbc = document.getElementById("daily-graph").getContext("2d");

var dailyBarChart = new Chart(dbc, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

// * Mobile Chart
var mdc = document.getElementById("mobile-graph").getContext("2d");

var trafficLineGraph = new Chart(mdc, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});

// * Traffic Chart
var tlg = document.getElementById("traffic-graph").getContext("2d");

var object = {
  type: "line",
  data: weeklyTrafficData,
  options: trafficOptions,
};

var trafficLineGraph = new Chart(tlg, object);

const trafficNav = document.querySelector(".traffic-nav");
const trafficLinks = document.getElementsByClassName("traffic-nav-link");
//

function addData(chart, label, data) {
  chart.data.labels = [];
  chart.data.datasets.data = [];
  chart.data.datasets.forEach((dataset) => {
    dataset.data = data;
  });
  label.forEach((lab) => {
    chart.data.labels.push(lab);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  dataset.data.pop();
  chart.update();
}

let hLabels = hourlyTrafficData.labels;
let dLabels = dailyTrafficData.labels;
let wLabels = weeklyTrafficData.labels;
let mLabels = monthlyTrafficData.labels;

let hData = hourlyTrafficData.datasets[0].data;
let dData = dailyTrafficData.datasets[0].data;
let wData = weeklyTrafficData.datasets[0].data;
let mData = monthlyTrafficData.datasets[0].data;

let hDataset = hourlyTrafficData.datasets[0];
let dDataset = dailyTrafficData.datasets[0];
let wDataset = weeklyTrafficData.datasets[0];
let mDataset = monthlyTrafficData.datasets[0];

//
const trafficListener = () => {
  trafficNav.addEventListener("click", (e) => {
    let click = e.target.textContent;
    click = click.toLowerCase();
    for (let i = 0; i < trafficLinks.length; i++) {
      trafficLinks[i].classList.remove("active");
    }
    if (click == "hourly") {
      e.target.classList.toggle("active");
      addData(trafficLineGraph, hLabels, hData, hDataset);
      removeData(trafficLineGraph, hDataset);
    } else if (click == "daily") {
      e.target.classList.toggle("active");
      addData(trafficLineGraph, dLabels, dData, dDataset);
      removeData(trafficLineGraph, dDataset);
    } else if (click == "weekly") {
      e.target.classList.toggle("active");
      addData(trafficLineGraph, wLabels, wData, wDataset);
      removeData(trafficLineGraph, hDataset);
    } else if (click == "monthly") {
      e.target.classList.toggle("active");
      addData(trafficLineGraph, mLabels, mData, mDataset);
      removeData(trafficLineGraph, mDataset);
    }
  });
};

trafficListener();

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

// * Auto-Complete

const instance = new PickleComplate({
  data: [
    {
      value: "Britta Perry",
      text: "Britta Perry",
    },
    {
      value: "Troy Barnes",
      text: "Troy Barnes",
    },
    {
      value: "Annie Edison",
      text: "Annie Edison",
    },
    {
      value: "Pierce Hawthorne",
      text: "Pierce Hawthorne",
    },
    {
      value: "Jeff Winger",
      text: "Jeff Winger",
    },
    {
      value: "Abed Nadir",
      text: "Abed Nadir",
    },
    {
      value: "Ben Chang",
      text: "Ben Chang",
    },
    {
      value: "Shirley Bennet",
      text: "Shirley Bennet",
    },
    {
      value: "Craig Pelton",
      text: "Craig Pelton",
    },
    {
      value: "Ian Duncan",
      text: "Ian Duncan",
    },
    {
      value: "Magnitude",
      text: "Magnitude",
    },
    {
      value: "Star-Burns",
      text: "Star-Burns",
    },
    {
      value: "Leaonard Rodriguez",
      text: "Leaonard Rodriguez",
    },
    {
      value: "Garrett Lambert",
      text: "Garrett Lambert",
    },
    {
      value: "Kickpuncher",
      text: "Kickpuncher",
    },
    {
      value: "Inspector Spacetime",
      text: "Inspector Spacetime",
    },
  ],
  config: {
    type: "local",
    target: ".message-form",
    clickCallback: (target, node) => {
      target.value = node.value;
    },
  },
});
