$(function(){
  let dateResa = null;
  let dateNow = null;
  console.log("dateResa " + dateResa + " dateNow " + dateNow)
})
// tuto date time 
// https://www.youtube.com/watch?v=-eRsWqwcPuk&ab_channel=dcode

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