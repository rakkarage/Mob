class TileMap {
	constructor() {
		this.tileSize = [16, 16]
		this.mapSize = [32, 64]
		this.tiles = [
			1, 3, 3, 3, 1, 1, 3, 1,
			1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 2, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 2, 1, 1, 1, 1,
			1, 1, 1, 1, 2, 1, 1, 1,
			1, 1, 1, 1, 2, 1, 1, 1,
			1, 1, 1, 0, 0, 1, 1, 1
		]
		this.ssCliff = loadSpriteSheet("img/Tile/Cliff.png", 16, 16, 20)
		this.ssDoodad = loadSpriteSheet("img/Tile/Doodad.png", 16, 16, 72)
		this.ssEdge = loadSpriteSheet("img/Tile/Edge.png", 16, 16, 123)
		this.ssLight = loadSpriteSheet("img/Tile/Light.png", 16, 16, 32)
		this.ssLightDebug = loadSpriteSheet("img/Tile/LightDebug.png", 16, 16, 32)
		this.ssOutside = loadSpriteSheet("img/Tile/Outside.png", 16, 16, 128)
		this.ssRubble = loadSpriteSheet("img/Tile/Rubble.png", 16, 16, 6)
		this.ssTheme = loadSpriteSheet("img/Tile/Theme.png", 16, 16, 116)
		this.ssWater = loadSpriteSheet("img/Tile/Water.png", 16, 16, 56)
	}
	GetTile(x, y) {
		return this.tiles[this.GetIndex(x, y)]
	}
	GetIndex(x, y) {
		return y * this.mapSize[0] + x
	}
	GetPosition(i) {
		var w = this.mapSize[0]
		var y = Math.floor(i / w)
		var x = Math.floor(i - w * y)
		return [x, y]
	}
	Draw() {
		this.ssTheme.drawFrame(this.GetTile(3, 1), 0, 0)
		// for (var y = 0; y < this.mapSize[1] - 2; y++) {
		// 	for (var x = 0; x < this.mapSize[0] - 2; x++) {
		// 		console.log(x + ", " + y)
		// 		var ii = this.GetTile(x, y)
		// 		console.log(ii)
		// 		this.ssTheme.drawFrame(this.GetTile(x, y), x * this.tileSize[0], y * this.tileSize[1])
		// 		// 		// image()
		// 		// 		// context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
		// 	}
		// }
	}
}
