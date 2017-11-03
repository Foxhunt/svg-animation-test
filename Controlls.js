class Controlls {

  constructor(buttonID, rangeID, duration) {
    this.playPause = document.getElementById(buttonID)
    this.slider = document.getElementById(rangeID)
    this.slider.max = duration
    this.interval = null
    this.duration = duration
    this.animations = []
    
    this.startTime = 0;
    this.lastTime = 0;

    this.init()
  }
  
  init(){
    this.slider.oninput = (e) => this.onSlide(e)
    this.playPause.onclick = () => this.onClick()
  }
  
  onSlide(event){
    let val = event.target.value / (Number(event.target.max) + 1)
      this.animate(val)
  }
  
  onClick(){
    if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      } else {
        this.startTime = Date.now()
        this.lastTime = this.startTime
        this.interval = setInterval(() => this.play(), 16)
      }
  }

  animate(at) {
    this.animations.forEach( an => an.forEach(a => a.at(at)))
  }

  play() {
    let now = Date.now()
    let pos = now - this.startTime
    let delta = now - this.lastTime
    this.lastTime = now
    
    if (Number(this.slider.value) < this.duration) {
      this.slider.stepUp(delta)
      this.animate(Number(this.slider.value) / (this.duration+1))
    } else {
      this.slider.value = 0
      this.startTime = Date.now()
    }
  }
  
  addAnimations(an){
    this.animations.push(an)
  }

}
