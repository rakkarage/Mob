class SlimeSmall extends Mob {
	static SlimeSmallA(layer, p) { return new SlimeSmall(p, layer, "img/Mob/SlimeSmallA.png") }
	constructor(p, layer, image, data = "data/SlimeSmall.json", animation = "data/SlimeSmallAnimation.json") {
		super(p, layer, image, data, animation)
	}
	get Fsm() {
		return super.Fsm
	}
	// attackFrames(a) { return [a[1], a[0], a[1], a[2], a[10], a[11], a[12], a[13], a[14], a[0], a[1]] }
	// idle0Frames(a) { return [a[1], a[0], a[1], a[2], a[1], a[0], a[1], a[2], a[1], a[0], a[1], a[2]] }
	// idle1Frames(a) { return [a[1], a[0], a[2]] }
	// idle2Frames(a) { return [a[1], a[0], a[8], a[0], a[1]] }
	// walkFrames(a) { return [a[1], a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[0], a[1]] }
}
