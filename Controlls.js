class Controlls {

  constructor(buttonID, rangeID, duration) {
    this.playPause = document.getElementById(buttonID)
    this.slider = document.getElementById(rangeID)
    this.slider.max = duration
    this.interval = null
    this.duration = duration
    this.animations = []

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
        if (this.slider.value == this.sliderMax)
          this.slider.value = 0
        this.interval = setInterval(() => this.play(), 1)
      }
  }

  animate(at) {
    this.animations.forEach( an => an.forEach(a => a.at(at)))
  }

  play() {
    let val = Number(this.slider.value)
    if (val < this.duration) {
      this.slider.stepUp()
      this.animate(val / (this.duration+1))
    } else {
      this.slider.value = 0
    }
  }
  
  addAnimations(an){
    this.animations.push(an)
  }

}
