// console.log(markers);
let adr = null
// https://www.developpez.net/forums/d545930/javascript/general-javascript/variable-entre-fichiers-java-script/

function book(i){
  // console.log(markers[i]);
  // console.log(i);
  adr = markers[i];
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
  console.log("requête de réservation");
  let name = document.getElementById("name").value;
  let firstName = document.getElementById("firstName").value;
  console.log(firstName+" "+name);
  const blank = isCanvasBlank(document.getElementById('signature'));
    // alert(blank ? 'blank' : 'not blank');
    // modifier pour afficher un message d'erreur avec  toastr lorsque le canvas est blank
  if (blank){
    // canvas vide, il manque la signature pour valider la réservation
    console.log("signature manquante")
    
    // popup signature manquante
    Command: toastr["error"]("Veuillez signer avant de valider la réservation", "Signature manquante")
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
  if (!blank && name != 0 && firstName != 0){
    // toutes les conditions sont ok pour réserver le vélo
    console.log("signature ok")
    // creation de la date de la réservation
    dateResa = new Date();
    console.log(dateResa);
    
    
    // envoyer le popup qui confirme la réservation
    Command: toastr["success"](adr + " - temps restant 15 min", "Réservation enregistrée")
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    
    // écrire les données de la résa dans la section html
    let maResa = document.getElementById("maResa")

    // début du timer de la réservation
    const resaTimerStart = 900;
    let timer = resaTimerStart;
    let timerShow = "15:00"
    setInterval(updateTimer, 1000)
    
    function updateTimer(){
      const minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      timerShow = `${minutes}: ${seconds}`;
      maResa.innerHTML = adr + " réservé le: " + dateResa + "</br>" +" par: " + firstName + " " + name +  "</br>" + " temps restant sur la reservation: " + timerShow
      timer--
      // pas de nombre négatif quand timer = 0
      timer = timer < 0 ? 0 : timer
    }
  }
});