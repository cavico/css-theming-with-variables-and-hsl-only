// NOT NEEDED. JUST TO EXAMPLE WORKS IN REAL TIME
var colorpicker = document.getElementById("colorpicker");

colorpicker.addEventListener("input", function () {
  var hue = parseInt(this.value);
  var primary = "hsla(" + hue + ", 100%, 50%, 1)";
  var primaryLighten = "hsla(" + hue + ", 100%, 70%, 1)";
  var primaryDarken = "hsla(" + hue + ", 100%, 35%, 1)";
  
  document.body.style.setProperty('--hue',              hue);
  document.body.style.setProperty('--primary',          primary);
  document.body.style.setProperty('--primary-lighten',  primaryLighten);
  document.body.style.setProperty('--primary-darken',   primaryDarken);
});