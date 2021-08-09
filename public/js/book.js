console.log(markers);
// https://www.developpez.net/forums/d545930/javascript/general-javascript/variable-entre-fichiers-java-script/

function book(i){
  console.log(i);

  let modal = document.getElementById("bookPopup");
  let span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    };
  };
};

$("#submitBook").click(function() { 
  console.log("réservation enregistrée")
});