class SlimeSquare extends Mob {
	static SlimeSquareA(p, layer) { return new SlimeSquare(p, layer, "img/Mob/SlimeSquareA.png") }
	static SlimeSquareSmallA(p, layer) { return new SlimeSquare(p, layer, "img/Mob/SlimeSquareSmallA.png") }
	static SlimeSquareSmallerA(p, layer) { return new SlimeSquare(p, layer, "img/Mob/SlimeSquareSmallerA.png") }
	constructor(p, layer, image, data = "data/SlimeSquare.json", animation = "data/SlimeSquareAnimation.json") {
		super(p, layer, image, data, animation)
	}
}
