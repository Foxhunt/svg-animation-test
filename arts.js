const arts = SVG('arts').size(300, 300)

var artsDuration = 3500
var artsAnimations = []

var artsControlls = new Controlls('artsPlayPause', 'artsSlider', 'artsLoop', artsDuration)
artsControlls.addAnimations(artsAnimations)
//artsControlls.playPause.click()

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

artsAnimations.push(all.animate(3000).rotate(360, 140, 140).pause())

// arrows up
artsAnimations.push(innerLines.line(150, 120, 170, 140).animate(artsDuration, '<').dmove(0, 10).pause())
artsAnimations.push(innerLines.line(150, 120, 130, 140).animate(artsDuration, '<').dmove(0, 10).pause())
artsAnimations.push(innerLines.line(150, 110, 170, 130).animate(artsDuration, '<').dmove(0, 10).pause())
artsAnimations.push(innerLines.line(150, 110, 130, 130).animate(artsDuration, '<').dmove(0, 10).pause())
artsAnimations.push(innerLines.line(170, 140, 170, 130).animate(artsDuration, '<').dmove(0, 10).pause())
artsAnimations.push(innerLines.line(130, 140, 130, 130).animate(artsDuration, '<').dmove(0, 10).pause())

artsAnimations.push(middLines.line(150, 100, 170, 120).animate(artsDuration, '<').dmove(0, 20).pause())
artsAnimations.push(middLines.line(150, 100, 130, 120).animate(artsDuration, '<').dmove(0, 20).pause())
artsAnimations.push(middLines.line(150, 90, 170, 110).animate(artsDuration, '<').dmove(0, 20).pause())
artsAnimations.push(middLines.line(150, 90, 130, 110).animate(artsDuration, '<').dmove(0, 20).pause())
artsAnimations.push(middLines.line(170, 120, 170, 110).animate(artsDuration, '<').dmove(0, 20).pause())
artsAnimations.push(middLines.line(130, 120, 130, 110).animate(artsDuration, '<').dmove(0, 20).pause())

artsAnimations.push(outerLines.line(150, 80, 170, 100).animate(artsDuration, '<').dmove(0, 30).pause())
artsAnimations.push(outerLines.line(150, 80, 130, 100).animate(artsDuration, '<').dmove(0, 30).pause())
artsAnimations.push(outerLines.line(150, 70, 170, 90).animate(artsDuration, '<').dmove(0, 30).pause())
artsAnimations.push(outerLines.line(150, 70, 130, 90).animate(artsDuration, '<').dmove(0, 30).pause())
artsAnimations.push(outerLines.line(170, 100, 170, 90).animate(artsDuration, '<').dmove(0, 30).pause())
artsAnimations.push(outerLines.line(130, 100, 130, 90).animate(artsDuration, '<').dmove(0, 30).pause())

// arrows down
artsAnimations.push(innerLines.line(150, 180, 170, 160).animate(artsDuration, '<').dmove(0, -10).pause())
artsAnimations.push(innerLines.line(150, 180, 130, 160).animate(artsDuration, '<').dmove(0, -10).pause())
artsAnimations.push(innerLines.line(150, 190, 170, 170).animate(artsDuration, '<').dmove(0, -10).pause())
artsAnimations.push(innerLines.line(150, 190, 130, 170).animate(artsDuration, '<').dmove(0, -10).pause())
artsAnimations.push(innerLines.line(170, 160, 170, 170).animate(artsDuration, '<').dmove(0, -10).pause())
artsAnimations.push(innerLines.line(130, 160, 130, 170).animate(artsDuration, '<').dmove(0, -10).pause())

artsAnimations.push(middLines.line(150, 200, 170, 180).animate(artsDuration, '<').dmove(0, -20).pause())
artsAnimations.push(middLines.line(150, 200, 130, 180).animate(artsDuration, '<').dmove(0, -20).pause())
artsAnimations.push(middLines.line(150, 210, 170, 190).animate(artsDuration, '<').dmove(0, -20).pause())
artsAnimations.push(middLines.line(150, 210, 130, 190).animate(artsDuration, '<').dmove(0, -20).pause())
artsAnimations.push(middLines.line(170, 180, 170, 190).animate(artsDuration, '<').dmove(0, -20).pause())
artsAnimations.push(middLines.line(130, 180, 130, 190).animate(artsDuration, '<').dmove(0, -20).pause())

artsAnimations.push(outerLines.line(150, 220, 170, 200).animate(artsDuration, '<').dmove(0, -30).pause())
artsAnimations.push(outerLines.line(150, 220, 130, 200).animate(artsDuration, '<').dmove(0, -30).pause())
artsAnimations.push(outerLines.line(150, 230, 170, 210).animate(artsDuration, '<').dmove(0, -30).pause())
artsAnimations.push(outerLines.line(150, 230, 130, 210).animate(artsDuration, '<').dmove(0, -30).pause())
artsAnimations.push(outerLines.line(170, 200, 170, 210).animate(artsDuration, '<').dmove(0, -30).pause())
artsAnimations.push(outerLines.line(130, 200, 130, 210).animate(artsDuration, '<').dmove(0, -30).pause())

artsAnimations.push(outerLines.animate(artsDuration*2, '>').rotate(90, 150, 150).pause())
artsAnimations.push(middLines.animate(artsDuration*2, '>').rotate(180, 150, 150).pause())
artsAnimations.push(innerLines.animate(artsDuration*2, '>').rotate(-90, 150, 150).pause())
