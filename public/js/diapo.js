let i = null;
class Slider
{
    constructor(auto)
    {
        this.auto = auto;
        this.time = null;
        this.selectedIndex = 0;
        this.slides = document.querySelector('.slides').children;
        this.total = this.slides.length;

        if(this.auto)
        {
            setTimeout(function(){

                console.log("ceci est le timeout function il démare au bout de 1,5 secondes");
            },1500);
            
             this.playAuto();
  
        }
        else
        {
            const controller = new SliderController();
        }
    }

    playAuto()
    {
        

        this.time = setInterval(function(){// on appelle la fonction 
    	    
            slider.slideTheImage();

        },5000);// 5000 millisecondes = 3 secondes
     
    }


    slideTheImage()
    {
        // let i = null
        this.selectedIndex++;

        if(this.selectedIndex >= this.total)
        {
            this.selectedIndex = 0;
        }

        //console.log(this.selectedIndex);

        for (i = 0; i <  this.slides.length; i++) {
            
             this.slides[i].classList.remove("active");
        }

        this.slides[this.selectedIndex].classList.add("active");

    }

    pause()
    {

      
        console.log("pause");
        clearInterval(this.time);// on met le temps en pause


    }

    prev()
    {
        console.log("previous");
         // exercise  terminer cette function afin que le slider revienne à l'image précédente et arriver à la première image reparte à la dernière
         clearInterval(this.time);

        for (i = 0; i <  this.slides.length; i++) {
            
        this.slides[i].classList.remove("active");
        }
    
        this.selectedIndex--;
        if(this.selectedIndex > this.total - 1)
        {
            this.selectedIndex = 0;
        }
        if(this.selectedIndex < 0){
            this.selectedIndex = this.total - 1;
        }
        console.log(this.selectedIndex)
        this.slides[this.selectedIndex].classList.add("active");
    }

    next()
    {
        console.log("next");
        // exercise  terminer cette function afin que le slider passe à l'image suivante puis arriver au bout revienne à zéro
        clearInterval(this.time);

        for (i = 0; i <  this.slides.length; i++) {
            
            this.slides[i].classList.remove("active");
        }
        
        this.selectedIndex++;
        if(this.selectedIndex > this.total - 1)
        {
            this.selectedIndex = 0;
        }
        if(this.selectedIndex < 0){
            this.selectedIndex = this.total - 1;
        }
        console.log(this.selectedIndex)
        this.slides[this.selectedIndex].classList.add("active");
    }
}

class SliderController
{
    constructor()
    {
		this.prevButton = document.querySelector('.prev');
		this.nextButton = document.querySelector('.next');
		this.playButton = document.querySelector(".play");
		this.pauseButton = document.querySelector('.pause');
        this.initController();
    }

    initController()
    {
        this.prevButton.addEventListener("click", function(){
		
		    slider.prev();// appelle la fonction play

	    });

	    this.pauseButton.addEventListener("click", function(){

    	    slider.pause();// appelle la fonction pause
    	
        });

        this.playButton.addEventListener("click", function(){
		
		    slider.playAuto();// appelle la fonction play

	    });

	    this.nextButton.addEventListener("click", function(){

    	    slider.next();// appelle la fonction pause
    	
        });
    }
}

const slider = new Slider(false);
