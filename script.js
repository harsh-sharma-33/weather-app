const apiKey = "de285cee535dd9b3d418ec5a5fb28786"
const defaultCities = document.querySelectorAll(".city")
const input = document.getElementById("input")
const searchBtn = document.querySelector(".search-icon")

defaultCities.forEach((city) => {
  city.addEventListener("click", (e) => getWeather(e.target.innerHTML))
})

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (e.target.value) getWeather(e.target.value)
  }
})

searchBtn.addEventListener("click", () => {
  if (input.value) getWeather(input.value)
})

const showDetaits = (data) => {
  let cityName = document.querySelector(".name")
  let temprature = document.querySelector(".degree")
  let humidity = document.getElementById("humidity")
  let wind = document.getElementById("wind")
  let pressure = document.getElementById("pressure")
  let time = document.querySelector(".time")
  let weather = document.querySelector(".weather")

  let date = new Date().toLocaleDateString()
  var today = new Date()
  var time_js = today.getHours() + " : " + today.getMinutes()
  cityName.innerHTML = data.name
  temprature.innerHTML = data.main.temp
  humidity.innerHTML = data.main.humidity
  wind.innerHTML = `${data.wind.speed} km/h`
  pressure.innerHTML = data.main.pressure
  time.innerHTML = `${time_js} - ${date}`
  weather.innerHTML = data.weather[0].main
}

const getWeather = (country) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      showDetaits(data)
      console.log(data)
    })
    .catch((err) => console.error(err))
}

getWeather("Noida")
