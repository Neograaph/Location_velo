$(function(){
  // variables globales utilisés ici et dans book.js
  // let dateResa = null;
  // let hoursResa = null;
  // let minutesResa = null;
  let dateNow = new Date();
  let elapsedDate = null;
  let elapsedHours = null;
  let elapsedMinutes = null;
  // let adr = null;
  // let importName = null;
  // let importFirstName = null;
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
  console.log(objectDateResa);
  
  // écrire les données de la réservation dans la section html
  let maResa = document.getElementById("maResa")
  if (dateResaStorage != null){
    elapsedDate = dateNow - objectDateResa
    console.log(elapsedDate);
    // elapsedDate = dateNow.toLocaleDateString() - dateResaStorage;
    // elapsedHours = dateNow.getHours() - dateHoursStorage;
    // elapsedMinutes = dateNow.getMinutes() - dateMinutesStorage;

    // console.log(dateNow.getMinutes());
    // console.log(dateMinutesStorage);
    // console.log(elapsedDate + ' ' +elapsedHours + ' ' +elapsedMinutes);

    // if (elapsedDate == NaN){
    //   // même jour

    // }
    // else{
    //   // délai dépassé
    //   maResa.innerHTML = "Aucune reservation actuellement"
    // }

    maResa.innerHTML = adrStorage + " réservé le: " + dateResaStorage + "</br>" +" par: " + importFirstNameStorage + " " + importNameStorage +  "</br>" + " temps restant sur la reservation: "
  }
  else{
    maResa.innerHTML = "Aucune reservation actuellement"
  }
  // console.log("dateResa " + dateResa + " dateNow " + dateNow)
})

// COURS
// $(function(){
//   let firstname = $("#firstname");
//   let save = $("#save");
//   let deleteStorage = $("#delete");
//   let showData = $("#save");
//   let exist = $("#exist");

//   save.on("click",function(e){
//     e.preventDefault();
//     localStorage.setItem('firstname', firstname.val());
//   });

//   deleteStorage.on("click",function(){
//     localStorage.clear();
//     alert("le local storage est nettoyé !");
//   });

//   showData.on("click",function(e){
//     e.preventDefault();
//     let myFirstName = localStorage.getItem("firstname");
//     console.log(myFirstName);
//   });

//   exist.on("click",function(e){
//     e.preventDefault();
//     let myFirstName = localStorage.getItem("firstname");
//     if(myFirstName){
//       localStorage.removeItem("firstname");
//     }
//     else{
//       alert("ce nom n'existe pas ici !");
//       return;
//     }
//   });
// });