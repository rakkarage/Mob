function preload() {
	_layer = new Layer()
	_slimeA = Slime.SlimeA(_layer, [16, 16])
	_slimeB = Slime.SlimeB(_layer, [32, 32])
	_slimeC = Slime.SlimeC(_layer, [128, 128])
	_slimeP = Slime.SlimeP(_layer, [100, 100])
	_slimeSmallA = SlimeSmall.SlimeSmallA(_layer, [200, 16])
}

function setup() {
	createCanvas(400, 400)
	noSmooth()
	_layer.Setup()
}

function draw() {
	background(0)
	_layer.Draw()
}
