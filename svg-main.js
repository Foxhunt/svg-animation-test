var draw = SVG('drawing').size(300, 300)

var svgMainDuration = 1000 * 4;

var controlls = new Controlls('playPause', 'slider', 'loop', svgMainDuration)
controlls.playPause.click()

var innerCircles = draw.group()
var outerCircles = draw.group()
var lines = draw.group()

draw.circle().radius(4).center(90, 90)

var lineAnims = []
var circleAnims = []
var rotations = []

controlls.addAnimations(lineAnims)
controlls.addAnimations(circleAnims)
controlls.addAnimations(rotations)

circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '>').center(40, 40).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '<').center(40, 90).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '>').center(140, 40).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '<').center(140, 90).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '>').center(140, 140).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '<').center(90, 140).radius(4)
  .pause()
)
circleAnims.push(
  outerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '>').center(40, 140).radius(4)
  .pause()
)
circleAnims.push(
  innerCircles.circle().radius(1).center(90, 90)
  .animate(svgMainDuration, '<').center(90, 40).radius(4)
  .pause()
)

lineAnims.push(
  lines.line(40, 40, 40, 40)
  .animate(svgMainDuration).plot(140, 140, 140, 40)
  .pause()
)
lineAnims.push(
  lines.line(140, 40, 140, 40)
  .animate(svgMainDuration).plot(40, 140, 140, 140)
  .pause()
)
lineAnims.push(
  lines.line(140, 140, 140, 140)
  .animate(svgMainDuration).plot(40, 40, 40, 140)
  .pause()
)
lineAnims.push(
  lines.line(40, 140, 40, 140)
  .animate(svgMainDuration).plot(140, 40, 40, 40)
  .pause()
)

lines.stroke({
  width: 2,
	linecap: 'round',
  color: '#000'
})

rotations.push(lines.animate(svgMainDuration, '<>').rotate(-(45 * 9)).pause())
rotations.push(outerCircles.animate(svgMainDuration, '<>').rotate(-(45 * 3)).pause())
rotations.push(innerCircles.animate(svgMainDuration, '<>').rotate(45 * 7).pause())
