const arts = SVG('arts').size(300, 300)

var artsDuration = 500
var artsAnimations = []

var artsControlls = new Controlls('artsPlayPause', 'artsSlider', artsDuration)
artsControlls.addAnimations(artsAnimations)

const artsLines = arts.group()

arts.circle().radius(2).center(150, 140)
arts.circle().radius(2).center(150, 150)
arts.circle().radius(2).center(150, 160)

artsLines.stroke({
  color: '#000',
  width: 2
})

// diamond
artsLines.line(150, 130, 170, 150)
artsLines.line(150, 130, 130, 150)
artsLines.line(150, 170, 170, 150)
artsLines.line(150, 170, 130, 150)

// arrows up
artsAnimations.push(artsLines.line(150, 120, 170, 140).animate(artsDuration, '>').dmove(0, -10).pause())
artsAnimations.push(artsLines.line(150, 120, 130, 140).animate(artsDuration, '>').dmove(0, -10).pause())
artsAnimations.push(artsLines.line(150, 110, 170, 130).animate(artsDuration, '>').dmove(0, -10).pause())
artsAnimations.push(artsLines.line(150, 110, 130, 130).animate(artsDuration, '>').dmove(0, -10).pause())
artsAnimations.push(artsLines.line(170, 140, 170, 130).animate(artsDuration, '>').dmove(0, -10).pause())
artsAnimations.push(artsLines.line(130, 140, 130, 130).animate(artsDuration, '>').dmove(0, -10).pause())

artsAnimations.push(artsLines.line(150, 100, 170, 120).animate(artsDuration, '>').dmove(0, -20).pause())
artsAnimations.push(artsLines.line(150, 100, 130, 120).animate(artsDuration, '>').dmove(0, -20).pause())
artsAnimations.push(artsLines.line(150, 90, 170, 110).animate(artsDuration, '>').dmove(0, -20).pause())
artsAnimations.push(artsLines.line(150, 90, 130, 110).animate(artsDuration, '>').dmove(0, -20).pause())
artsAnimations.push(artsLines.line(170, 120, 170, 110).animate(artsDuration, '>').dmove(0, -20).pause())
artsAnimations.push(artsLines.line(130, 120, 130, 110).animate(artsDuration, '>').dmove(0, -20).pause())

artsAnimations.push(artsLines.line(150, 80, 170, 100).animate(artsDuration, '>').dmove(0, -30).pause())
artsAnimations.push(artsLines.line(150, 80, 130, 100).animate(artsDuration, '>').dmove(0, -30).pause())
artsAnimations.push(artsLines.line(150, 70, 170, 90).animate(artsDuration, '>').dmove(0, -30).pause())
artsAnimations.push(artsLines.line(150, 70, 130, 90).animate(artsDuration, '>').dmove(0, -30).pause())
artsAnimations.push(artsLines.line(170, 100, 170, 90).animate(artsDuration, '>').dmove(0, -30).pause())
artsAnimations.push(artsLines.line(130, 100, 130, 90).animate(artsDuration, '>').dmove(0, -30).pause())


artsControlls.playPause.click()