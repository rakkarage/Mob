function preload() {
	_layer = new Layer()
	_slimeA1 = Slime.SlimeA(_layer, [16, 16])
	_slimeA2 = Slime.SlimeA(_layer, [16, 32])
	_slimeA3 = Slime.SlimeA(_layer, [16, 48])
	_slimeB = Slime.SlimeB(_layer, [32, 32])
	_slimeC = Slime.SlimeC(_layer, [128, 128])
	_slimeP = Slime.SlimeP(_layer, [100, 100])
	_slimeSmallA = SlimeSmall.SlimeSmallA(_layer, [200, 16])
}

function setup() {
	createCanvas(400, 400)
	noSmooth()
	_layer.Setup()
	_slimeB.Fsm.attack()
	_slimeC.Fsm.walk()
}

function draw() {
	background(0)
	_layer.Draw()
}
