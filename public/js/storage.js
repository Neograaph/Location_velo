$(function(){
  // variables globales utilisés ici et dans book.js
  let dateResa = null;
  let dateNow = new Date();
  let adr = null;
  let importName = null;
  let importFirstName = null;
  let dateResaStorage = localStorage.getItem('dateResa');
  let adrStorage = localStorage.getItem('adress');
  let importNameStorage = localStorage.getItem('name');
  let importFirstNameStorage = localStorage.getItem('firstName');
  
  // écrire les données de la réservation dans la section html
  let maResa = document.getElementById("maResa")
  if (dateResaStorage != null){
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