var draw = SVG('drawing').size(300, 300)

const duration = 1000 * 2;

var circles = draw.group()
var lines = draw.group()

draw.circle().radius(4).center(90, 90)

var lineAnims = []
var circleAnims = []
var rotations = [];


circleAnims.push(
  circles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(40, 40).radius(4)
  .pause()
)
circleAnims.push(
  circles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(140, 40).radius(4)
  .pause()
)
circleAnims.push(
  circles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(140, 140).radius(4)
  .pause()
)
circleAnims.push(
  circles.circle().radius(1).center(90, 90)
  .animate(duration, '>').center(40, 140).radius(4)
  .pause()
)

lineAnims.push(
  lines.line(40, 40, 40, 40)
  .animate(duration / 3).plot(40, 40, 140, 40)
  .animate(duration / 3).plot(140, 40, 140, 40)
  .animate(duration / 3).plot(140, 140, 140, 40)
  .pause()
)
lineAnims.push(
  lines.line(140, 40, 140, 40)
  .animate(duration / 3).plot(140, 40, 140, 140)
  .animate(duration / 3).plot(140, 140, 140, 140)
  .animate(duration / 3).plot(40, 140, 140, 140)
  .pause()
)
lineAnims.push(
  lines.line(140, 140, 140, 140)
  .animate(duration / 3).plot(140, 140, 40, 140)
  .animate(duration / 3).plot(40, 140, 40, 140)
  .animate(duration / 3).plot(40, 40, 40, 140)
  .pause()
)
lineAnims.push(
  lines.line(40, 140, 40, 140)
  .animate(duration / 3).plot(40, 140, 40, 40)
  .animate(duration / 3).plot(40, 40, 40, 40)
  .animate(duration / 3).plot(140, 40, 40, 40)
  .pause()
)

lines.stroke({
  width: 2,
  color: '#000'
})

rotations.push(lines.animate(duration).rotate(-(45 * 5)).pause())
rotations.push(circles.animate(duration).rotate(45 * 3).pause())

/*
lineAnims.forEach(a => a.play())
circleAnims.forEach(a => a.play())
rotations.forEach(a => a.play())
*/

function animate(at) {
  lineAnims.forEach(a => a.at(at))
  circleAnims.forEach(a => a.at(at))
  rotations.forEach(a => a.at(at))
}

document.getElementById('slider').oninput = (event) => {
  let val = event.target.value / 1001
  console.log(val)
  animate(val)
}
