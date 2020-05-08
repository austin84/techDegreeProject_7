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
  data: weeklyTrafficData,
  options: weeklyTrafficOptions,
});

//* li manipulation below

// *

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
