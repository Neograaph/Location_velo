let timerLoader;
loading();
function loading() {
  timerLoader = setTimeout(showPage, 500);
}

function showPage() {
  // console.log('script loader')
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}