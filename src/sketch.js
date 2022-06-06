function preload() {
	_tileMap = new TileMap()
	_layer = new Layer()
	_slimeA1 = Slime.SlimeA(_layer, [16, 16])
	_slimeA2 = Slime.SlimeA(_layer, [16, 32])
	_slimeA3 = Slime.SlimeA(_layer, [16, 48])
	_slimeB = Slime.SlimeB(_layer, [32, 32])
	_slimeC = Slime.SlimeC(_layer, [128, 128])
	_slimeP = Slime.SlimeP(_layer, [100, 100])
	_slimeSmallA = SlimeSmall.SlimeSmallA(_layer, [200, 16])
	_slimeSmallerA1 = SlimeSmaller.SlimeSmallerA(_layer, [16, 64])
	_slimeSmallerA2 = SlimeSmaller.SlimeSmallerA(_layer, [16, 80])
	_slimeSquareA = SlimeSquare.SlimeSquareA(_layer, [80, 16])
	_slimeSquareSmallA = SlimeSquare.SlimeSquareSmallA(_layer, [96, 16])
	_slimeSquareSmallerA = SlimeSquare.SlimeSquareSmallerA(_layer, [128, 16])
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
