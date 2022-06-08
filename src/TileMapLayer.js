class TileMapLayer {
	constructor(spriteSheet, t, w, h) {
		this.ss = ss
		this.tileSize = t
		this.mapWidth = w
		this.mapHeight = h
		this.data = Array(w * h).fill(-1)
	}
}
