class SlimeSmall extends Mob {
	static SlimeSmallA(p, layer) { return new SlimeSmall(p, layer, "img/Mob/SlimeSmallA.png") }
	constructor(p, layer, image, data = "data/SlimeSmall.json", animation = "data/SlimeSmallAnimation.json") {
		super(p, layer, image, data, animation)
	}
	get Fsm() {
		return super.Fsm
	}
}
