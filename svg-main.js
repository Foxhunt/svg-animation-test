var draw = SVG('drawing').size(300, 300)

const slider = document.getElementById('slider')
const playPause = document.getElementById('playPause')
var interval

const duration = 1000 * 5;

var innerCircles = draw.group()
var outerCircles = draw.group()
var lines = draw.group()

draw.circle().radius(4).center(90, 90)

var lineAnims = []
var circleAnims = []
var rotations = []


circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(40, 40).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '<').center(40, 90).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(140, 40).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '<').center(140, 90).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(140, 140).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '<').center(90, 140).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(40, 140).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(duration, '<').center(90, 40).radius(4)
  .pause()
)

lineAnims.push(
  lines.line(40, 40, 40, 40)
  .animate(duration).plot(140, 140, 140, 40)
  .pause()
)
lineAnims.push(
  lines.line(140, 40, 140, 40)
  .animate(duration).plot(40, 140, 140, 140)
  .pause()
)
lineAnims.push(
  lines.line(140, 140, 140, 140)
  .animate(duration).plot(40, 40, 40, 140)
  .pause()
)
lineAnims.push(
  lines.line(40, 140, 40, 140)
  .animate(duration).plot(140, 40, 40, 40)
  .pause()
)

lines.stroke({
  width: 2,
  color: '#000'
})

rotations.push(lines.animate(duration, '<>').rotate(-(45 * 9)).pause())
rotations.push(outerCircles.animate(duration, '<>').rotate(-(45 * 3)).pause())
rotations.push(innerCircles.animate(duration, '<>').rotate(45 * 7).pause())

function animate(at) {
  lineAnims.forEach(a => a.at(at))
  circleAnims.forEach(a => a.at(at))
  rotations.forEach(a => a.at(at))
}

slider.oninput = (event) => {
  let val = event.target.value / (Number(event.target.max)+1)
  console.log(val)
  animate(val)
}


playPause.onclick = () => {
  if(interval){
    clearInterval(interval)
    interval = null
  }else{
    if(Number(slider.value) == Number(slider.max))
      slider.value = 0
    interval = setInterval(animateTime, (duration/Number(slider.max)))
  }
}
  

function animateTime(){
  
  let val = Number(slider.value)
  let max = Number(slider.max)
  
  if(val < max){
    slider.stepUp()
    animate(val / (max+1))
  }else{
    clearInterval(interval)
    interval = null
  }
}

