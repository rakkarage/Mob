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
			Layer(this.ssTheme),
			Layer(this.ssTheme),
			Layer(this.ssOutside),
			Layer(this.ssWater),
			Layer(this.ssDoodad),
			Layer(this.ssWater),
			Layer(this.ssDoodad),
			Layer(this.ssLight),
			Layer(this.ssEdge)
		]
	}
	Layer(spriteSheet) {
		return new TileMapLayer(spriteSheet, this.tileSize, this.mapWidth, this.mapHeight)
	}
	Draw() {
		for (var y = 0; y < this.mapHeight; y++) {
			for (var x = 0; x < this.mapWidth; x++) {
				this.mapLayers.forEach(layer => {
					var tile = layer.GetMap(x, y)
					if (tile != -1) {
						layer.ss.drawFrame(tile, x * this.tileSize, y * this.tileSize)
					}
				});
			}
		}
	}
	SetRandomFloor(x, y) {
		// 13 - 18
	}
	SetRandomEdge(x, y) {

	}
}
