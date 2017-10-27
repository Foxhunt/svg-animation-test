var draw = SVG('drawing').size(300, 300)

const duration = 1000 * 4;

var circles = draw.group()
var lines = draw.group()

draw.circle().radius(4).center(90, 90)

var lineAnims = []
var lineAnims2 = []


circles.circle().radius(4).center(90, 90)
  .animate(duration).center(40, 40)
circles.circle().radius(4).center(90, 90)
  .animate(duration).center(140, 40)
circles.circle().radius(4).center(90, 90)
  .animate(duration).center(140, 140)
circles.circle().radius(4).center(90, 90)
  .animate(duration).center(40, 140)

lineAnims.push(lines.line(40, 40, 40, 40).animate(1000).plot(40, 40, 140, 40).pause())
lineAnims.push(lines.line(140, 40, 140, 40).animate(1000).plot(140, 40, 140, 140).pause())
lineAnims.push(lines.line(140, 140, 140, 140).animate(1000).plot(140, 140, 40, 140).pause())
lineAnims.push(lines.line(40, 140, 40, 140).animate(1000).plot(40, 140, 40, 40).pause())

lineAnims2.push(lines.line(40, 40, 40, 40).animate(300).plot(40, 40, 90, 90).pause())
lineAnims2.push(lines.line(140, 40, 140, 40).animate(300).plot(140, 40, 90, 90).pause())
lineAnims2.push(lines.line(140, 140, 140, 140).animate(300).plot(140, 140, 90, 90).pause())
lineAnims2.push(lines.line(40, 140, 40, 140).animate(300).plot(40, 140, 90, 90).pause())

lines.stroke({
  width: 2,
  color: '#000'
})

var all = draw.group().add(lines).add(circles)

all.animate(duration).rotate(45).after(() => {lineAnims.forEach(a => a.play().after(() => {lineAnims2.forEach(a => a.play())}))})
