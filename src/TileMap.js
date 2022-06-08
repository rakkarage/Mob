class TileMap {
	constructor(spriteSheet) {
		this.ss = spriteSheet
		this.theme = 0
		this.tileSize = 16
		this.mapWidth = 8
		this.mapHeight = 9
		this.map = [
			13, 13, 13, 13, 13, 13, 13, 13,
			13, 13, 13, 13, 13, 13, 13, 13,
			13, 13, 13, 13, 13, 13, 13, 13,
			13, 13, 13, 13, 13, 12, 13, 13,
			13, 13, 13, 13, 13, 13, 13, 13,
			13, 13, 13, 20, 13, 13, 13, 13,
			13, 13, 13, 13, 20, 13, 13, 13,
			13, 13, 13, 13, 12, 13, 13, 13,
			13, 13, 13, 13, 13, 13, 13, 13
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
		this.mapBack = new TileMapLayer(this.ssTheme, this.mapWidth, this.mapHeight)
		this.mapFore = new TileMapLayer(this.ssTheme, this.mapWidth, this.mapHeight)
		// onready var _back: TileMap = $Level / Viewport / Back
		// onready var _fore: TileMap = $Level / Viewport / Fore
		// onready var _flower: TileMap = $Level / Viewport / Flower
		// onready var _waterBack: TileMap = $Level / Viewport / WaterBack
		// onready var _splitBack: TileMap = $Level / Viewport / SplitBack
		// onready var _itemBack: TileMap = $Level / Viewport / ItemBack
		// onready var _tree: TileMap = $Level / Viewport / Tree
		// onready var _itemFore: TileMap = $Level / Viewport / ItemFore
		// onready var _splitFore: TileMap = $Level / Viewport / SplitFore
		// onready var _waterFore: TileMap = $Level / Viewport / WaterFore
		// onready var _top: TileMap = $Level / Viewport / Top
		// onready var _light: TileMap = $Level / Viewport / Light
		// onready var _edge: TileMap = $Level / Viewport / Edge
	}
	GetMap(x, y) {
		return this.map[this.GetIndex(x, y, this.mapWidth)]
	}
	GetIndex(x, y, width) {
		return y * width + x
	}
	GetPosition(index) {
		var y = Math.floor(index / this.mapWidth)
		var x = Math.floor(index - this.mapWidth * y)
		return [x, y]
	}
	Draw() {
		for (var y = 0; y < this.mapHeight; y++) {
			for (var x = 0; x < this.mapWidth; x++) {
				this.ssTheme.drawFrame(this.GetMap(x, y), x * this.tileSize, y * this.tileSize)
			}
		}
	}
	SetRandomFloor(x, y) {
		// 13 - 18
	}
	SetRandomEdge(x, y) {

	}
}
