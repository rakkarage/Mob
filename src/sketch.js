function preload() {
	_tileMap = new TileMap()
	for (var y = 0; y < _tileMap.mapHeight; y++) {
		for (var x = 0; x < _tileMap.mapWidth; x++) {
			_tileMap.SetRandomFloor(x, y)
		}
	}
	_layer = new Layer()
	_slimeA1 = Slime.SlimeA([16, 16], _layer)
	_slimeA2 = Slime.SlimeA([16, 32], _layer)
	_slimeA3 = Slime.SlimeA([16, 48], _layer)
	_slimeB = Slime.SlimeB([32, 32], _layer)
	_slimeC = Slime.SlimeC([128, 128], _layer)
	_slimeP = Slime.SlimeP([100, 100], _layer)
	_slimeSmallA = SlimeSmall.SlimeSmallA([200, 16], _layer)
	_slimeSmallerA1 = SlimeSmaller.SlimeSmallerA([16, 64], _layer)
	_slimeSmallerA2 = SlimeSmaller.SlimeSmallerA([16, 80], _layer)
	_slimeSquareA = SlimeSquare.SlimeSquareA([80, 16], _layer)
	_slimeSquareSmallA = SlimeSquare.SlimeSquareSmallA([96, 16], _layer)
	_slimeSquareSmallerA = SlimeSquare.SlimeSquareSmallerA([128, 16], _layer)
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
	_tileMap.Draw()
	_layer.Draw()
}
