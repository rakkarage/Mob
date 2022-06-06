class SlimeSmaller extends Mob {
	static SlimeSmallerA(p, layer) { return new SlimeSmaller(p, layer, "img/Mob/SlimeSmallerA.png") }
	constructor(p, layer, image, data = "data/SlimeSmall.json", animation = "data/SlimeSmallAnimation.json") {
		super(p, layer, image, data, animation)
	}
	get Fsm() {
		return super.Fsm
	}
}
