var s = Snap(300, 300)

var circles = s.g(
  s.circle(90, 90, 4),
  s.circle(90, 40, 4).animate({cx: '-=50'}, 4000),
  s.circle(140, 90, 4).animate({cy: '-=50'}, 4000),
  s.circle(90, 140, 4).animate({cx: '+=50'}, 4000),
  s.circle(40, 90, 4).animate({cy: '+=50'}, 4000)
)

s.circle(90, 90, 4)

var lines = s.g(
  s.line(40,40,140,40),
  s.line(140,40,140,140),
  s.line(140,140,40,140),
  s.line(40,140,40,40)  
).attr({strokeWidth: 2, stroke: '#000'})


var all = s.g(lines, circles)

all.animate({ transform: "r45,90,90" }, 3000)