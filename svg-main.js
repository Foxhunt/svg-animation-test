var draw = SVG('drawing').size(300, 300)

const duration = 1000 * 2;

var circles = draw.group()
var lines = draw.group()

draw.circle().radius(4).center(90, 90)

var lineAnims = []
var circleAnims = []

var rotation = 45;


circleAnims.push(
	circles.circle().radius(4).center(90, 90)
	.animate(duration).center(40, 40)
	.pause()
)
circleAnims.push(
	circles.circle().radius(4).center(90, 90)
	.animate(duration).center(140, 40)
	.pause()
)
circleAnims.push(
	circles.circle().radius(4).center(90, 90)
	.animate(duration).center(140, 140)
	.pause()
)
circleAnims.push(
	circles.circle().radius(4).center(90, 90)
	.animate(duration).center(40, 140)
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

var all = draw.group().add(lines).add(circles)

all.click(animate)

function animate() {
	all.animate(duration).rotate(rotation)
	lineAnims.forEach(a => a.play())
	circleAnims.forEach(a => a.play())
}
