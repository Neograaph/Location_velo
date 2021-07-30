$(function(){
  let submitBook = $("#submitBook");
  submitBook.on("click",function(e){
    e.preventDefault();
    down();
    function down(){
        count = 1200;
        let down = setInterval(timerdown, 1000);
        function timerdown() {
          if (count == 0){
            Stoptimerdown()
            console.log(count)
          }
          else{
            containerTest.innerText = count.toString();
            count--;
          }
        }
        function Stoptimerdown() {
          clearInterval(down);
        }
    };
  });
});



  // deleteStorage.on("click",function(){
  //   localStorage.clear();
  //   alert("le local storage est nettoyé !");
  // });

  // showData.on("click",function(e){
  //   e.preventDefault();
  //   let myFirstName = localStorage.getItem("firstname");
  //   console.log(myFirstName);
  // });

  // exist.on("click",function(e){
  //   e.preventDefault();
  //   let myFirstName = localStorage.getItem("firstname");
  //   if(myFirstName){
  //     localStorage.removeItem("firstname");
  //   }
  //   else{
  //     alert("ce nom n'existe pas ici !");
  //     return;
  //   }
  // });