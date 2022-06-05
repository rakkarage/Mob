class SlimeSquare extends Mob {
	static SlimeSquareA(layer, p) { return new Slime("data/SlimeSquare.json", "img/Mob/SlimeSquareA.png", layer, p) }
	static SlimeSquareSmallA(layer, p) { return new Slime("data/SlimeSquare.json", "img/Mob/SlimeSquareSmallA.png", layer, p) }
	static SlimeSquareSmallerA(layer, p) { return new Slime("data/SlimeSquare.json", "img/Mob/SlimeSquareSmallerA.png", layer, p) }
	constructor(data, image, layer, p) {
		super(data, image, layer, p)
	}
	get Fsm() {
		return super.Fsm
	}
	attackFrames(a) { return [a[1], a[0], a[1], a[2], a[1], a[0], a[1]] }
	idle0Frames(a) { return [a[1], a[0], a[1], a[0], a[1], a[0]] }
	idle1Frames(a) { return [a[1], a[1], a[1]] }
	idle2Frames(a) { return [a[0], a[0], a[0]] }
	walkFrames(a) { return [a[1], a[0], a[1], a[2], a[1], a[0], a[1]] }
}
