class Slime extends Mob {
	static SlimeA(layer, p) { return new Slime("Slime.json", "img/SlimeA.png", layer, p) }
	static SlimeB(layer, p) { return new Slime("Slime.json", "img/SlimeB.png", layer, p) }
	static SlimeC(layer, p) { return new Slime("Slime.json", "img/SlimeC.png", layer, p) }
	static SlimeP(layer, p) { return new Slime("Slime.json", "img/SlimeP.png", layer, p) }
	constructor(data, image, layer, p) {
		super(data, image, layer, p)
	}
	attackFrames(a) { return [a[2], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[8]] }
	idle0Frames(a) { return [a[2], a[1], a[2], a[1], a[2], a[1]] }
	idle1Frames(a) { return [a[2], a[0], a[2], a[0], a[2]] }
	idle2Frames(a) { return [a[2], a[0], a[2], a[1], a[2], a[1], a[2], a[1], a[2], a[1], a[2]] }
	walkFrames(a) { return [a[2], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]] }
}