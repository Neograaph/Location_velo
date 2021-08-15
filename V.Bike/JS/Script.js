    document.querySelector('.second-button').addEventListener('click', function () {
    
    document.querySelector('.animated-icon2').classList.toggle('open');
    });

    let searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

searchBox.forEach(elm => {
  elm.addEventListener('click', () => {
    elm.previousElementSibling.value = '';
  });
});

$(document).ready(function(){
 
  $("a").on('click', function(event) {

   
    if (this.hash !== "") {
    
      event.preventDefault();

     
      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        
        window.location.hash = hash;
      });
    } 
  });
});