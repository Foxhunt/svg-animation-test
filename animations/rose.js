const rose = SVG('rose').size(300, 300)

var roseDuration = 2000
var roseAnimations = []

var roseControlls = new Controlls('rose', roseDuration)
roseControlls.addAnimations(roseAnimations)

var lines_1 = rose.group()
var lines_2 = rose.group()
var lines_3 = rose.group()
var lines_4 = rose.group()
var lines_5 = rose.group()

 lines.line(40, 40, 40, 40)
  .animate(svgMainDuration).plot(140, 140, 140, 40)
  .pause()

roseAnimations.push(lines_1.circle().radius(2).center(140, 140))
lines_1.circle().radius(2).center(160, 140)
lines_1.circle().radius(2).center(160, 160)
lines_1.circle().radius(2).center(140, 160)

lines_2.circle().radius(2).center(120, 140)
lines_2.circle().radius(2).center(160, 120)
lines_2.circle().radius(2).center(180, 160)
lines_2.circle().radius(2).center(140, 180)
