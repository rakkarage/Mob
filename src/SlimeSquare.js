class SlimeSquare extends Mob {
	static SlimeSquareA(layer, p) { return new SlimeSquare(p, layer, "img/Mob/SlimeSquareA.png") }
	static SlimeSquareSmallA(layer, p) { return new SlimeSquare(p, layer, "img/Mob/SlimeSquareSmallA.png") }
	static SlimeSquareSmallerA(layer, p) { return new SlimeSquare(p, layer, "img/Mob/SlimeSquareSmallerA.png") }
	constructor(p, layer, image, data = "data/SlimeSquare.json", animation = "data/SlimeSquareAnimation.json") {
		super(p, layer, image, data, animation)
	}
	get Fsm() {
		return super.Fsm
	}
	// attackFrames(a) { return [a[1], a[0], a[1], a[2], a[1], a[0], a[1]] }
	// idle0Frames(a) { return [a[1], a[0], a[1], a[0], a[1], a[0]] }
	// idle1Frames(a) { return [a[1], a[1], a[1]] }
	// idle2Frames(a) { return [a[0], a[0], a[0]] }
	// walkFrames(a) { return [a[1], a[0], a[1], a[2], a[1], a[0], a[1]] }
}
