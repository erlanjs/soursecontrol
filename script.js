const temp = document.querySelector(".content h2");
const title = document.querySelector(".content h3");
const speed = document.querySelector(".content p");
const humidity = document.querySelector(".content span");
const icon = document.querySelector(".content img");

const weather = {
  apiKey: "8f0c06de2fd3eece981a526a5d2d06da",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.displayWeather(data);
      });
  },
  displayWeather: function (data) {
    temp.innerHTML = `${data.main.temp} &deg; C`;
    speed.textContent = `Скорость ветра: ${data.wind.speed} км/ч`;
    humidity.textContent = `Влажность: ${data.main.humidity}%`;
    icon.src =
      "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  },
};

weather.fetchWeather("Bishkek");
