const cDate = document.getElementById("current-date");
const cTime = document.getElementById("ticking-clock");

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let months = ["","January","February","March","April","May","June","July","August","September","October","November","December",
];

let dates = ["","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st",
];

currentDate();
setInterval(tickingClock, 1000);

function currentDate() {
  const d = new Date();
  const day = days[d.getDay()];
  const month = months[d.getMonth() + 1];
  const date = dates[d.getDate()];
  const year = d.getFullYear();
  cd = day + ", " + month + " " + date + " " + year;
  cDate.innerText = cd;
}

function tickingClock() {
  var d = new Date();
  var currentSeconds = d.getSeconds();
  var currentHour = d.getHours();
  var currentMinute = d.getMinutes();
  var timeofDay = "AM";

  if (currentHour >= 12) {
    timeofDay = "PM";
  }
  if (currentHour > 12) {
    currentHour = currentHour - 12;
  }
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }

  if (currentHour < 12) {
    document.getElementById("our-header").innerText =
      "Cock-A-Doodle-Doo! Good Morning!";
  }
  if (currentHour >= 12 && currentHour < 5) {
    document.getElementById("our-header").innerText = "Good Afternoon!";
  }
  if (currentHour > 5) {
    document.getElementById("our-header").innerText = "Good Evening!";
  }

  cTime.innerText =
    currentHour + ":" + currentMinute + ":" + currentSeconds + " " + timeofDay;
}
