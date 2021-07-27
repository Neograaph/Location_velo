console.log("je suis lancé")

// popup réservation
let modal = document.getElementById("bookPopup");
let btn = document.getElementById("bookBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  };
};