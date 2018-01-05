var ws = new WebSocket('ws://localhost:8080/')

var at = 0

ws.onmessage = function(event) {
    let data = event.data.split(',')
    
    console.log(data[0])

    if (data[0] === 'R') {
      if (at >= 0 && at <= 1)
        console.log(at += (Number(data[1]) / (360*10)))
      else if (at > 0.9)
        at = 0.99999999999
      else if (at < 0)
        at = 0
      
      if (at >= 0 && at < 1){
        artsControlls.animate(at)
        controlls.animate(at)
      }
    }
  }