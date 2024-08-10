const profile = {
  grettings: {
    morning: "Bom dia!! O sol já nasceu!",
    afternoon: "Tarrrde!",
    evening: "Bas noite",
    night: "Vai dormir seu maluco",
  },
  themes: [
    {
      img: "sunglasses.jpg",
      background: "#192E57",
      foreground: "#FFF1C6",
      accent: "#F27EB4",
    },
    {
      img: "cabra.png",
      background: "#231D1A",
      foreground: "#FFF1C6",
      accent: "#FFAE67",
    },
    {
      img: "whale.jpg",
      background: "#161C26",
      foreground: "#D0FFC8",
      accent: "#FFB5B5",
    },
    {
      img: "computa.jpg",
      background: "#2F2833",
      foreground: "#E9DEAA",
      accent: "#85F2D3",
    },
    {
      img: "mystery-dungeon.jpg",
      background: "#A6977B",
      foreground: "#D2FF70",
      accent: "#8AF4FF",
    },
  ],
};

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