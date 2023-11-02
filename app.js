const cityName = document.getElementById("city");
const searchButton = document.getElementById("searchBtn");

const ui = new UI();
const weather = new Weather();
eventListeners();

function eventListeners() {
  searchButton.addEventListener("click", getData);
}

function getData(e) {
  let name = cityName.value;

  if (name === "") {
    ui.showMessage("This field cannot be left blank");
  } else {
    weather
      .getWeather(name)
      .then((result) => {
        ui.displayCityData(result.data.current, result.data.location);
      })
      .catch((err) => {
        ui.showMessage("The city you were looking for was not found");
      });
  }
  ui.clearInput();
}
