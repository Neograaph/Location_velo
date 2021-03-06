class signature{
  constructor(canvas){
    this.sign = false
    this.prevX = 0
    this.prevY = 0
    this.canvas = document.querySelector(canvas)
    this.ctx = this.canvas.getContext("2d")
    this.ctx.strokeStyle = "black"
    this.ctx.lineWidth = 2
    this.canvas.addEventListener("mousedown", (e) => {
      // je signe 
      this.sign = true
      // je stock mes coordonnées de départ
      this.prevX = e.clientX - this.canvas.offsetLeft
      this.prevY = e.clientY - this.canvas.offsetTop
    });
    this.canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      e.stopPropagation();
      // je signe 
      this.sign = true
      // je stock mes coordonnées de départ
      this.prevX = e.targetTouches[0].clientX - this.canvas.offsetLeft
      this.prevY = e.targetTouches[0].clientY - this.canvas.offsetTop
    });
    this.canvas.addEventListener("mousemove", (e) => {
      if (this.sign){
        let currX = e.clientX - this.canvas.offsetLeft
        let currY = e.clientY - this.canvas.offsetTop
        this.draw(this.prevX, this.prevY, currX, currY)
        this.prevX = currX
        this.prevY = currY
      };
    });
    this.canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.sign){
        let currX = e.targetTouches[0].clientX - this.canvas.offsetLeft
        let currY = e.targetTouches[0].clientY - this.canvas.offsetTop
        this.draw(this.prevX, this.prevY, currX, currY)
        this.prevX = currX
        this.prevY = currY
      };
    });
    this.canvas.addEventListener("mouseup", () => {
      this.sign = false
    });
    this.canvas.addEventListener("mouseout", () => {
      this.sign = false
    });
    this.canvas.addEventListener("touchend", () => {
      this.sign = false
    });
  };
  draw(depX, depY, destX, destY){
    this.ctx.beginPath()
    this.ctx.moveTo(depX, depY)
    this.ctx.lineTo(destX, destY)
    this.ctx.closePath()
    this.ctx.stroke()
  }
  effacer(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
};
// test pour vérifier si le canvas de la signature est vide ou pas
function isCanvasBlank(canvas) {
  const context = canvas.getContext('2d');
  const pixelBuffer = new Uint32Array(
    context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
  );
  return !pixelBuffer.some(color => color !== 0);
};

window.onload = () => {
  let canvas = new signature("#signature")
  document.querySelector("#effacer").addEventListener("click", (e) => {
    e.preventDefault
    canvas.effacer()
  })
};