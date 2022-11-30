let day = new Date().getDate();
let month = new Date().toLocaleString("default", { month: "short" });
let year = new Date().getFullYear();
let year2 = year.toString().slice(-2);
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekNum = new Date().getDay();
let week = weekdays[weekNum];

let dateHeaderEl = document.getElementById("date-header");

function dailyPlannerHeader() {
  let dateHeaderText =
    week.substring(0, 3) + " " + month + " " + day + "/" + year2;
  let dateContent = document.createElement("p");
    dateContent.textContent = dateHeaderText;

  dateHeaderEl.appendChild(dateContent);
}

dailyPlannerHeader();
