var draw = SVG('drawing').size(300, 300)

const duration = 1000 * 4;

var circles = draw.group()
var lines = draw.group()

draw.circle().radius(4).center(90, 90)


circles.circle().radius(4).center(90, 90)
  .animate(duration).center(40, 40)
circles.circle().radius(4).center(90, 90)
  .animate(duration).center(140, 40)
circles.circle().radius(4).center(90, 90)
  .animate(duration).center(140, 140)
circles.circle().radius(4).center(90, 90)
  .animate(duration).center(40, 140)

lines.line(40, 40, 140, 40)
lines.line(140, 40, 140, 140)
lines.line(140, 140, 40, 140)
lines.line(40, 140, 40, 40)
lines.stroke({
  width: 2,
  color: '#000'
})

var all = draw.group().add(lines).add(circles)

all.animate(3000).rotate(45)
