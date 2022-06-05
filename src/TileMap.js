class TileMap {
	constructor() {
		this.tileSize = [16, 16]
		this.mapSize = [128, 64]
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
		// explode_sprite_sheet = loadSpriteSheet('assets/explode_sprite_sheet.png', 171, 158, 11);
	}
	GetTile(x, y) {
		return this.tiles[this.Index(x, y)]
	}
	GetIndex(x, y) {
		return y * this.mapSize[x] + x
	}
	GetPosition(i) {
		var w = this.mapSize[x]
		var y = Math.floor(i / w)
		var x = Math.floor(i - w * y)
		return [x, y]
	}
	Draw() {
		// context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
	}
}
