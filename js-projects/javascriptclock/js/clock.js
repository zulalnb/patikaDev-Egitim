let myName = prompt("Adınız nedir?");
let greeting = document.querySelector("#myName");
greeting.innerText = `${myName}!`;

var myVar = setInterval(function () {
  showTime();
}, 1000);

function showTime() {
  var simdi = new Date();
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var day = days[simdi.getDay()];
  document.querySelector("#myClock").innerHTML =
    simdi.toLocaleTimeString() + " " + day; // return 23:59:59
}
