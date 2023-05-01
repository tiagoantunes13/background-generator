var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];

var codeFormat = document.querySelector("h3");

var body = document.querySelector("body");

color1.addEventListener("input", changeColors);

color2.addEventListener("input", changeColors);

function changeColors() {
  cssCode =
    "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
  body.style.background = cssCode;
  codeFormat.textContent = cssCode + ";";
}

/*
var select = document.getElementById("selectOrientation");

select.addEventListener("change", function () {
  console.log(select.options[select.selectedIndex].text);
  console.log(select.options[select.selectedIndex].value);
  console.log(select.options[select.selectedIndex].text);
  changeColors(select.options[select.selectedIndex].text);
});
*/
