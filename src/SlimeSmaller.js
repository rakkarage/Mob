class SlimeSmaller extends Mob {
	static SlimeSmallerA(layer, p) { return new Slime("data/SlimeSmall.json", "img/Mob/SlimeSmallerA.png", layer, p) }
	constructor(data, image, layer, p) {
		super(data, image, layer, p)
	}
	get Fsm() {
		return super.Fsm
	}
	attackFrames(a) { return [a[1], a[0], a[1], a[2], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[1]] }
	idle0Frames(a) { return [a[1], a[0], a[1], a[2], a[1], a[0], a[1], a[2], a[1], a[0], a[1], a[2]] }
	idle1Frames(a) { return [a[1], a[0], a[2]] }
	idle2Frames(a) { return [a[1], a[0], a[1]] }
	walkFrames(a) { return [a[1], a[0], a[1], a[2], a[3], a[4], a[5], a[2], a[1], a[0], a[1]] }
}
