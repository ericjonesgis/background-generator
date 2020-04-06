var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button")

function setcolor() {
	a = getrandomcolor()
	b = getrandomcolor()
	body.style.background = "linear-gradient(to right, " + a + ", " + b + ")";
	css.textContent = body.style.background + ";";
}


function getrandomcolor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setcolor)