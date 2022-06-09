class TileMap {
	constructor(spriteSheet) {
		this.ss = spriteSheet
		this.theme = 0
		this.tileSize = 16
		this.mapWidth = 8
		this.mapHeight = 9
		this.ssCliff = loadSpriteSheet("img/Tile/Cliff.png", 16, 16, 20)
		this.ssDoodad = loadSpriteSheet("img/Tile/Doodad.png", 16, 16, 72)
		this.ssEdge = loadSpriteSheet("img/Tile/Edge.png", 16, 16, 123)
		this.ssLight = loadSpriteSheet("img/Tile/Light.png", 16, 16, 32)
		this.ssLightDebug = loadSpriteSheet("img/Tile/LightDebug.png", 16, 16, 32)
		this.ssOutside = loadSpriteSheet("img/Tile/Outside.png", 16, 16, 128)
		this.ssRubble = loadSpriteSheet("img/Tile/Rubble.png", 16, 16, 6)
		this.ssTheme = loadSpriteSheet("img/Tile/Theme.png", 16, 16, 116)
		this.ssWater = loadSpriteSheet("img/Tile/Water.png", 16, 16, 56)
		this.mapLayers = [
			new TileMapLayer(this.ssTheme, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssTheme, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssOutside, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssWater, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssDoodad, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssWater, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssDoodad, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssLight, this.tileSize, this.mapWidth, this.mapHeight),
			new TileMapLayer(this.ssEdge, this.tileSize, this.mapWidth, this.mapHeight)
		]
	}
	Draw() {
		this.mapLayers.forEach(layer => {
			console.log(layer)
			for (var y = 0; y < this.mapHeight; y++) {
				for (var x = 0; x < this.mapWidth; x++) {
					console.log(x + ", " + y)
					var tile = layer.GetMap(x, y)
					if (tile != -1) {
						layer.ss.drawFrame(tile, x * this.tileSize, y * this.tileSize)
					}
				}
			}
		})
	}
	SetRandomFloor(x, y) {
		this.mapLayers[0].SetData(x, y, this.RandomFloor())
	}
	RandomFloor() {
		return this.Random(13, 18)
	}
	Random(min, max) {
	}
	SetRandomEdge(x, y) {

	}
}
