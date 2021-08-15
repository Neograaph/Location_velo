$(function(){
  let dateNow = new Date();
  let elapsedDate = null;
  let elapsedHours = null;
  let elapsedMinutes = null;

  let dateyearResaStorage = localStorage.getItem('yearsResa');
  let datemonthResaStorage = localStorage.getItem('monthResa');
  let datedayResaStorage = localStorage.getItem('dayResa');

  let dateResaStorage = localStorage.getItem('dateResa');
  let dateHoursStorage = localStorage.getItem('hoursResa');
  let dateMinutesStorage = localStorage.getItem('minutesResa');
  let adrStorage = localStorage.getItem('adress');
  let importNameStorage = localStorage.getItem('name');
  let importFirstNameStorage = localStorage.getItem('firstName');

  let objectDateResa = new Date(dateyearResaStorage,datemonthResaStorage,datedayResaStorage,dateHoursStorage,dateMinutesStorage,00);
  
  // écrire les données de la réservation dans la section html
  let maResa = document.getElementById("maResa")
  if (dateResaStorage != null){
    document.getElementById("name").value = localStorage.getItem('name');
    document.getElementById("firstName").value = localStorage.getItem('firstName');
    elapsedDate = dateNow - objectDateResa
    let date = new Date(elapsedDate);
    let hours = date.getHours() - 1;
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    let elapsedTime = parseInt(seconds) + parseInt((date.getMinutes() * 60)) + parseInt(((date.getHours() - 1) * 3600));
    localStorage.setItem('elapsedTime', elapsedTime);

    maResa.innerHTML = "Reservation: temps expiré"
  }
  else{
    maResa.innerHTML = "Aucune reservation actuellement"
  }
})