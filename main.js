import "./js/language.js";
import "./js/theme.js";

// -------------------------------------------сьогоднішня дата у форматі ДД.ММ.РРРР
const today = document.getElementById("today");
const date = new Date();

const nowDay = String(date.getDate()).padStart(2, "0");
const nowMonth = String(date.getMonth() + 1).padStart(2, "0"); // місяці з 0
const nowYear = date.getFullYear();

const formattedDate = `${nowDay}.${nowMonth}.${nowYear}`;
today.textContent = formattedDate;
// -------------------------------------------розрахунок віку
const month = document.getElementById("month");
const year = document.getElementById("year");
const years = document.getElementById("years");
const day = document.getElementById("day");
const months = document.getElementById("months");
const days = document.getElementById("days");
const calculateButton = document.getElementById("calculate");

const allMonths = document.querySelector(".all-months");
const allDays = document.querySelector(".all-days");
const allMinutes = document.querySelector(".all-minutes");

const getResult = (e) => {
  e.preventDefault();
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  const birthDate = new Date(yearValue, monthValue - 1, dayValue); // місяці з 0
  // console.log(birthDate);
  const todayDate = new Date(nowYear, nowMonth - 1, nowDay); // місяці з 0
  // console.log(todayDate);

  const ageInMilliseconds = todayDate - birthDate;
  // console.log(ageInMilliseconds);
  const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  const ageInYears = Math.floor(ageInDays / 365.25); // враховуємо високосні роки
  const ageInMonths = Math.floor((ageInDays % 365.25) / 30.44); // середня кількість днів у місяці
  const remainingDays = Math.floor((ageInDays % 365.25) % 30.44);

  years.textContent = ageInYears;
  months.textContent = ageInMonths;
  days.textContent = remainingDays;

  allDays.textContent = ageInDays;
  allMonths.textContent = Math.floor(ageInDays / 30.44); // середня кількість днів у місяці
  allMinutes.textContent = Math.floor(ageInDays * 24 * 60); // кількість хвилин у віці
};

calculateButton.addEventListener("click", getResult);
