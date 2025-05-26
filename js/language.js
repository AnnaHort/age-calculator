// --------------------------------------------------------------перемикання мов

// список мов
const translations = {
  en: {
    title: "How old are you?",
    button: "UK",
    todayTitle: "Today is: ",
    day: "Day",
    month: "Month",
    year: "Year",
    calculateButton: "Calculate",
    days: "Days",
    months: "Months",
    years: "Years",
    titleAllMonths: "In months, that’s: ",
    congratulationsTitle: "Congratulations! You live in this world already: ",
    titleAllDays: "In days, that’s: ",
    titleAllMinutes: "In minutes, that’s: ",
  },
  uk: {
    title: "Скільки вам років?",
    button: "EN",
    todayTitle: "Сьогодні: ",
    day: "День",
    month: "Місяць",
    year: "Рік",
    calculateButton: "Розрахувати",
    days: "Днів",
    months: "Місяців",
    years: "Років",
    titleAllMonths: "В місяцях це: ",
    congratulationsTitle: "Вітаємо! Ви вже прожили в цьому світі: ",
    titleAllDays: "У днях це: ",
    titleAllMinutes: "А у хвилинах це цілих: ",
  },
};

// початково встановлюємо англійську мову

let currentLang = "en";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "uk" : "en";

  // оновлюємо текст на сторінці відповідно до вибраної мови
  document.getElementById("title").textContent =
    translations[currentLang].title;
  document.getElementById("lang-toggle").textContent =
    translations[currentLang].button;
  document.querySelector(".today-title").textContent =
    translations[currentLang].todayTitle;
  document.querySelector(".day-label").textContent =
    translations[currentLang].day;
  document.querySelector(".month-label").textContent =
    translations[currentLang].month;
  document.querySelector(".year-label").textContent =
    translations[currentLang].year;
  document.getElementById("calculate").textContent =
    translations[currentLang].calculateButton;
  document.querySelector(".days").textContent = translations[currentLang].days;
  document.querySelector(".months").textContent =
    translations[currentLang].months;
  document.querySelector(".years").textContent =
    translations[currentLang].years;
  document.querySelector(".congratulations-title").textContent =
    translations[currentLang].congratulationsTitle;
  document.querySelector(".title-all-months").textContent =
    translations[currentLang].titleAllMonths;
      document.querySelector(".title-all-days").textContent =
    translations[currentLang].titleAllDays;
          document.querySelector(".title-all-minutes").textContent =
    translations[currentLang].titleAllMinutes;
});
