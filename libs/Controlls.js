class Controlls {

	constructor(svgDivID, duration) {
		this.svgDiv = document.getElementById(svgDivID)
		this.createControlls(svgDivID)
		this.slider.max = duration
		this.interval = null
		this.duration = duration
		this.animations = []

		this.startTime = 0;
		this.lastTime = 0;

		this.init()
	}

	init() {
		this.slider.oninput = (e) => this.onSlide(e)
		this.playPause.onclick = () => this.onClick()
	}

	onSlide(event) {
		let val = Number(this.slider.value) / (this.duration + 1)
		this.animate(val)
	}

	onClick() {
		if (this.slider.value == this.duration) {
			this.slider.value = 0
			this.startTime = Date.now()
			this.lastTime = this.startTime
			clearInterval(this.interval)
			this.interval = setInterval(() => this.play(), 16)
		} else if (this.interval) {
			clearInterval(this.interval)
			this.interval = null
		} else {
			this.startTime = Date.now()
			this.lastTime = this.startTime
			this.interval = setInterval(() => this.play(), 16)
		}
	}

	animate(at) {
		this.animations.forEach(an => an.forEach(a => a.at(at)))
	}

	play() {
		let now = Date.now()
		let pos = now - this.startTime
		let delta = now - this.lastTime
		this.lastTime = now

		if (Number(this.slider.value) < this.duration) {
			this.slider.stepUp(delta)
			this.animate(Number(this.slider.value) / (this.duration + 1))
		} else if (this.loopBox.checked) {
			this.slider.value = 0
			this.startTime = Date.now()
		} else {
			clearInterval(this.interval)
			this.interval = null
		}
	}

	addAnimations(an) {
		this.animations.push(an)
	}

	createControlls(svgDivID) {
		let playPause = document.createElement('input')
		playPause.id = svgDivID + 'PlayPause'
		playPause.type = 'button'
		playPause.value = 'play'

		let slider = document.createElement('input')
		slider.id = svgDivID + 'Slider'
		slider.type = 'range'
		slider.value = '0'
		
		let loopBox = document.createElement('input')
		loopBox.id = svgDivID + 'Loop'
		loopBox.type = 'checkbox'
		
		let loopText = document.createTextNode("loop")
		
		
		this.svgDiv.parentNode.insertBefore(playPause, this.svgDiv.nextSibling)
			.parentNode.insertBefore(slider, playPause.nextSibling)
			.parentNode.insertBefore(loopBox, slider.nextSibling)
			.parentNode.insertBefore(loopText, loopBox.nextSibling)
			
		
		this.playPause = playPause
		this.slider = slider
		this.loopBox = loopBox
	}
}
