class Slime extends Mob {
	static SlimeA(p, layer) { return new Slime(p, layer, "img/Mob/SlimeA.png") }
	static SlimeB(p, layer) { return new Slime(p, layer, "img/Mob/SlimeB.png") }
	static SlimeC(p, layer) { return new Slime(p, layer, "img/Mob/SlimeC.png") }
	static SlimeP(p, layer) { return new Slime(p, layer, "img/Mob/SlimeP.png") }
	constructor(p, layer, image, data = "data/Slime.json", animation = "data/SlimeAnimation.json") {
		super(p, layer, image, data, animation)
	}
	get Fsm() {
		return super.Fsm
	}
	// attackFrames(a) { return [a[2], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[8]] }
	// idle0Frames(a) { return [a[2], a[1], a[2], a[1], a[2], a[1]] }
	// idle1Frames(a) { return [a[2], a[0], a[2], a[0], a[2]] }
	// idle2Frames(a) { return [a[2], a[0], a[2], a[1], a[2], a[1], a[2], a[1], a[2], a[1], a[2]] }
	// walkFrames(a) { return [a[2], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]] }
}
