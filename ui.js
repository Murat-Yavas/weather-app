class UI {
  constructor() {
    this.cityData = document.getElementById("display");
    this.inputValue = document.getElementById("city");
    this.dataForm = document.getElementById("form-container");
  }

  displayCityData(current, location) {
    this.cityData.innerHTML = `
    
        <div class="card" style="width: 18rem">
          <img src="${current.condition.icon}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${location.name}</h5>
            <p class="card-text">${current.temp_c} C&deg;</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">The Felt Temperature: ${current.feelslike_c} C&deg;</li>
            <li class="list-group-item">${current.condition.text}</li>
            <li class="list-group-item">Local Time: ${location.localtime}</li>
          </ul>
        </div>
    `;
  }

  clearInput() {
    this.inputValue.value = "";
  }

  showMessage(message) {
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = message;

    this.dataForm.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 2000);
  }
}
