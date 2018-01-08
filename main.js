var ws = new WebSocket('ws://localhost:8080/')

ws.onmessage = function (event) {
  let data = event.data.split(',')

  console.log(data[0], data[1])

  if (data[0] === 'R') {
    let delta = (Number(data[1]) / (360 * 30))
    artsControlls.slideBy(delta)
    controlls.slideBy(delta)
  } else if (data[0] === 'B' && data[1] == 1) {
    artsControlls.onClick()
    controlls.onClick()
  }
}
