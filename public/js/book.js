function book(i){
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
  maResa.innerHTML = "Aucune reservation actuellement"
  clearInterval(window.timerBack);
  clearInterval(window.timerBook);
  localStorage.removeItem("yearsResa");
  localStorage.removeItem("dayResa");
  localStorage.removeItem("minutesResa");
  localStorage.removeItem("dateResa");
  localStorage.removeItem("elapsedTime");
  localStorage.removeItem("monthResa");
  localStorage.removeItem("hoursResa");
  timer = 900;
  let name = document.getElementById("name").value;
  let firstName = document.getElementById("firstName").value;
  localStorage.setItem('name', name);
  localStorage.setItem('firstName', firstName);
  const blank = isCanvasBlank(document.getElementById('signature'));

  if (blank){
    // canvas vide, il manque la signature pour valider la réservation
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
    document.getElementById("resaSection").style.display = "block";
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
    window.timerBook = setInterval(updateTimer, 1000)
  }
});

// début du timer de la réservation
let timer;
let timerShow;
let adrStorage = localStorage.getItem('adress');
let dateResaStorage = localStorage.getItem('dateResa');
let dateHoursStorage = localStorage.getItem('hoursResa');
let dateMinutesStorage = localStorage.getItem('minutesResa');
let importNameStorage = localStorage.getItem('name');
let importFirstNameStorage = localStorage.getItem('firstName');

function updateTimer(){
  // réinjecter les valeurs pour le cas d'un retour sur le site de l'utilisateur
  adrStorage = localStorage.getItem('adress');
  dateResaStorage = localStorage.getItem('dateResa');
  dateHoursStorage = localStorage.getItem('hoursResa');
  dateMinutesStorage = localStorage.getItem('minutesResa');
  importNameStorage = localStorage.getItem('name');
  importFirstNameStorage = localStorage.getItem('firstName');

  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timerShow = `${minutes}: ${seconds}`;
  maResa.innerHTML = adrStorage + " réservé le: " + dateResaStorage + " à: " + dateHoursStorage + "h " + dateMinutesStorage + "min" +"</br>" +" Par: " + importFirstNameStorage + " " + importNameStorage +  "</br>" + " Temps restant sur la reservation: " + timerShow
  timer--
  // pas de nombre négatif quand timer = 0
  timer = timer < 0 ? 0 : timer
}

// Quand retour sur le site => soustraction du temps déjà écoulé
let elapsedTime = localStorage.getItem('elapsedTime');
if (dateResaStorage != null){
  if (elapsedTime < 900){
    timer = 900 - parseInt(elapsedTime);
    window.timerBack = setInterval(updateTimer, 1000)
  }
}
else{
  timer = 900;
}

function cancelBook() {
  localStorage.removeItem("adress");
  localStorage.removeItem("yearsResa");
  localStorage.removeItem("dayResa");
  localStorage.removeItem("name");
  localStorage.removeItem("minutesResa");
  localStorage.removeItem("dateResa");
  localStorage.removeItem("elapsedTime");
  localStorage.removeItem("monthResa");
  localStorage.removeItem("hoursResa");
  localStorage.removeItem("firstName");

  // utilisation de window pour accéder à l'instance plus haut dans une autre fonction (scope)
  clearInterval(window.timerBack);
  clearInterval(window.timerBook);
  maResa.innerHTML = "Aucune reservation actuellement"
  
  // masque la section reservation 
  document.getElementById("resaSection").style.display = "none";

  // popup reservation annulé
  Command: toastr["error"]("Réservation annulée ou temps écoulé", "Réservation annulée")
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
};
// fin du timer 0: 00 
if (timerShow === '0: 00'){
  console.log("endtimer");
  cancelBook();
};