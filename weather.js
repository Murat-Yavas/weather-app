class Weather {
  constructor() {
    this.url =
      "https://api.weatherapi.com/v1/current.json?key=62da5c10645742e0acb85852230211&q=";
  }

  async getWeather(city) {
    const response = await fetch(this.url + city);
    const cityData = await response.json();

    return {
      data: cityData,
    };
  }
}
