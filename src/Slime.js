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
}
