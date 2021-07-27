// console.log("je suis lancé")
// console.log(bikeStock)
$(document).ready(function(){
  window.onclick = function(e){
    let popup = document.querySelectorAll("leaflet-marker-icon")
    if (e.target == popup) {
      console.log("click")
      function book(){
        let modal = document.getElementById("bookPopup");
        // let btn = document.getElementById("bookBtn");
        let btn = document.querySelectorAll(".bookBtn")
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
      };
      book();
    };
  };
});
// popup réservation