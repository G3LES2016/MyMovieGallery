
window.onload = function() {
  resizeBack();
}

window.onresize = function() {
  resizeBack();
}

function resizeBack() {
  let screenC = document.getElementById("screenCategory");
  let back = document.getElementById("backImg");
  let width = screenC.clientWidth;
  back.setAttribute("width", width);
}
