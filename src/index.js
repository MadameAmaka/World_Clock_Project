function updateTime(){
let lagosElement = document.querySelector("#lagos")
let lagosDateElement = lagosElement.querySelector(".date");
let lagosTimeElement = lagosElement.querySelector(".time");
let lagosTime =moment().tz("Africa/Lagos");
lagosDateElement.innerHTML = moment().format("MMMM Do YYYY");
lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>] A [</small>]");

let chicagoElement = document.querySelector("#chicago");
let chicagoDateElement = chicagoElement.querySelector(".date");
let chicagoTimeElement = chicagoElement.querySelector(".time");
let chicagoTime = moment().tz("America/Chicago");
chicagoDateElement.innerHTML = moment().format("MMMM Do YYYY");
chicagoTimeElement.innerHTML = chicagoTime.format(
  "h:mm:ss [<small>] A [</small>]"
);
}
function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone==="current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}
        <small>${cityTime.format("A")}</small>
        </div>
      </div>
      <a href="index.html">Reset</a>`;
}
updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity)