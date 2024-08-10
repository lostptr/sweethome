function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

function getPeriodOfTheDay() {
  const hour = new Date().getHours();
  if (hour < 6) {
    return "night";
  } else if (hour < 13) {
    return "morning";
  } else if (hour < 18) {
    return "afternoon";
  } else if (hour <= 23) {
    return "evening";
  }
}

const theme = pickRandom(profile.themes);

// Set image
const imgSlot = document.getElementById("img-slot");
imgSlot.src = "img/" + theme.img;
imgSlot.hidden = false;

// Set colors
const css = document.querySelector(":root");
css.style.setProperty("--background-color", theme.background);
css.style.setProperty("--foreground-color", theme.foreground);
css.style.setProperty("--accent-color", theme.accent);

// Set date
const formatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" });
const dateString = capitalize(formatter.format(new Date()));
const dateHeader = document.getElementById("date-header");
dateHeader.innerHTML = dateString;

// Set gretting
var greetting = profile.grettings[getPeriodOfTheDay()];
const greetingHeader = document.getElementById("greeting-header");
greetingHeader.innerHTML = greetting;
