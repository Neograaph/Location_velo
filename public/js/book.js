// console.log(markers);
// https://www.developpez.net/forums/d545930/javascript/general-javascript/variable-entre-fichiers-java-script/

function book(i){
  // console.log(markers[i]);
  // console.log(i);
  adr = markers[i];
  localStorage.setItem('adress', adr);
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
  localStorage.setItem('name', name);
  localStorage.setItem('firstName', firstName);
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
    // .toLocaleDateString() + " " + new Date().getHours() + "h " + new Date().getMinutes() + "min";
    let temp = new Date();
    let dateResa = temp.toLocaleDateString();
    let hoursResa = temp.getHours();
    let minutesResa = temp.getMinutes();
    let yearsResa = temp.getFullYear();
    let monthResa = temp.getMonth();
    let dayResa = temp.getDate();
    resumeResa = {
      date: dateResa,
      hours: hoursResa,
      minutes: minutesResa,
    }
    // note: local storage ne prend pas la "var objet" resumeResa (return object object)
    console.log(resumeResa);
    localStorage.setItem('dateResa', dateResa);
    localStorage.setItem('hoursResa', hoursResa);
    localStorage.setItem('minutesResa', minutesResa);
    localStorage.setItem('yearsResa', yearsResa);
    localStorage.setItem('monthResa', monthResa);
    localStorage.setItem('dayResa', dayResa);
  
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
    setInterval(updateTimer, 1000)
  }
});

// début du timer de la réservation
let timer;
let timerShow;
let adrStorage = localStorage.getItem('adress');
let dateResaStorage = localStorage.getItem('dateResa');
let importNameStorage = localStorage.getItem('name');
let importFirstNameStorage = localStorage.getItem('firstName');

function updateTimer(){
  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timerShow = `${minutes}: ${seconds}`;
  // console.log(timerShow)
  maResa.innerHTML = adrStorage + " réservé le: " + dateResaStorage + "</br>" +" par: " + importFirstNameStorage + " " + importNameStorage +  "</br>" + " temps restant sur la reservation: " + timerShow
  timer--
  // pas de nombre négatif quand timer = 0
  timer = timer < 0 ? 0 : timer
}

// Quand retour sur le site => soustraction du temps déjà écoulé
// let dateResaStorage = localStorage.getItem('dateResa');
let elapsedTime = localStorage.getItem('elapsedTime');
if (dateResaStorage != null){
  if (elapsedTime < 900){
    timer = 900 - parseInt(elapsedTime);
    // console.log(typeof(resaTimerStart));
    setInterval(updateTimer, 1000)
  }
}
else{
  timer = 900;
}

// setInterval(function(){
//   if (elapsedTime < 900){
//     resaTimerStart = 900 - parseInt(elapsedTime);
//     console.log(resaTimerStart);
//     updateTimer();
//   }
// },1000);