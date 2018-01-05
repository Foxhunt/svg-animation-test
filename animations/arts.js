const arts = SVG('arts').size(300, 300)

var artsDuration = 2000
var artsAnimations = []

var artsControlls = new Controlls('arts', artsDuration)
artsControlls.addAnimations(artsAnimations)

var outerLines = arts.group()
var middLines = arts.group()
var innerLines = arts.group()
var all = arts.group().add(outerLines).add(middLines).add(innerLines)

artsAnimations.push(all.circle().radius(1).center(150, 150).animate(artsDuration, '<').center(150, 140).radius(2).rotate(180, 150, 150).pause())
all.circle().radius(2).center(150, 150)
artsAnimations.push(all.circle().radius(1).center(150, 150).animate(artsDuration, '<').center(150, 160).radius(2).rotate(180, 150, 150).pause())

arts.stroke({
  color: '#000',
	linecap: 'round',
  width: 2
})

// diamond
all.line(150, 130, 170, 150)
all.line(150, 130, 130, 150)
all.line(150, 170, 170, 150)
all.line(150, 170, 130, 150)

// arrows up
artsAnimations.push(outerLines.line(150, 50, 170, 70).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(150, 50, 130, 70).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(150, 40, 170, 60).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(150, 40, 130, 60).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(170, 70, 170, 60).animate(artsDuration, '<').dmove(0, 60).pause())
artsAnimations.push(outerLines.line(130, 70, 130, 60).animate(artsDuration, '<').dmove(0, 60).pause())

artsAnimations.push(middLines.line(150, 80, 170, 100).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(150, 80, 130, 100).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(150, 70, 170, 90).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(150, 70, 130, 90).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(170, 100, 170, 90).animate(artsDuration, '<').dmove(0, 40).pause())
artsAnimations.push(middLines.line(130, 100, 130, 90).animate(artsDuration, '<').dmove(0, 40).pause())

artsAnimations.push(innerLines.line(150, 110, 170, 130).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(150, 110, 130, 130).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(150, 100, 170, 120).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(150, 100, 130, 120).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(170, 130, 170, 120).animate(artsDuration, '-').dmove(0, 20).pause())
artsAnimations.push(innerLines.line(130, 130, 130, 120).animate(artsDuration, '-').dmove(0, 20).pause())

// arrows down
artsAnimations.push(innerLines.line(150, 190, 170, 170).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(150, 190, 130, 170).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(150, 200, 170, 180).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(150, 200, 130, 180).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(170, 170, 170, 180).animate(artsDuration, '-').dmove(0, -20).pause())
artsAnimations.push(innerLines.line(130, 170, 130, 180).animate(artsDuration, '-').dmove(0, -20).pause())

artsAnimations.push(middLines.line(150, 220, 170, 200).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(150, 220, 130, 200).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(150, 230, 170, 210).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(150, 230, 130, 210).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(170, 200, 170, 210).animate(artsDuration, '<').dmove(0, -40).pause())
artsAnimations.push(middLines.line(130, 200, 130, 210).animate(artsDuration, '<').dmove(0, -40).pause())

artsAnimations.push(outerLines.line(150, 250, 170, 230).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(150, 250, 130, 230).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(150, 260, 170, 240).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(150, 260, 130, 240).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(170, 230, 170, 240).animate(artsDuration, '<').dmove(0, -60).pause())
artsAnimations.push(outerLines.line(130, 230, 130, 240).animate(artsDuration, '<').dmove(0, -60).pause())

artsAnimations.push(innerLines.animate(artsDuration, '>').rotate(90, 150, 150).pause())
artsAnimations.push(middLines.animate(artsDuration, '>').rotate(-180, 150, 150).pause())
artsAnimations.push(outerLines.animate(artsDuration, 'swingTo').rotate(90*3, 150, 150).pause())
