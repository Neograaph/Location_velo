// document.getElementById("flash").style.display = "none"
function book(){
  // let flash = document.getElementById("flash").value
  // console.log(flash);
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