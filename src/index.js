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
updateTime();
setInterval(updateTime, 1000);

