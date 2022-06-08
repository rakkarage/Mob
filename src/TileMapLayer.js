class TileMapLayer {
	constructor(spriteSheet, t, w, h) {
		this.ss = ss
		this.tileSize = t
		this.mapWidth = w
		this.mapHeight = h
		this.data = Array(w * h).fill(-1)
	}
	GetMap(x, y) {
		return this.data[this.GetIndex(x, y, this.mapWidth)]
	}
	GetIndex(x, y, width) {
		return y * width + x
	}
	GetPosition(index) {
		var y = Math.floor(index / this.mapWidth)
		var x = Math.floor(index - this.mapWidth * y)
		return [x, y]
	}
}
