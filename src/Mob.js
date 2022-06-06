class Mob {
	constructor(p, layer, image, data, animation) {
		this.p = p
		var that = this
		loadJSON(data, function (frames) {
			that.ss = loadSpriteSheet(image, frames)
			loadJSON(animation, function (animationFrames) {
				that._attackFrames = that._frames(animationFrames.attack, frames.frames)
				that.attack = loadAnimation(new SpriteSheet(image, that._attackFrames))
				that.attack.frameDelay = 4
				that._idle0Frames = that._frames(animationFrames.idle0, frames.frames)
				that.idle0 = loadAnimation(new SpriteSheet(image, that._idle0Frames))
				that.idle0.frameDelay = 16
				that._idle1Frames = that._frames(animationFrames.idle1, frames.frames)
				that.idle1 = loadAnimation(new SpriteSheet(image, that._idle1Frames))
				that.idle1.frameDelay = 16
				that._idle2Frames = that._frames(animationFrames.idle2, frames.frames)
				that.idle2 = loadAnimation(new SpriteSheet(image, that._idle2Frames))
				that.idle2.frameDelay = 16
				that._walkFrames = that._frames(animationFrames.walk, frames.frames)
				that.walk = loadAnimation(new SpriteSheet(image, that._walkFrames))
				that.walk.frameDelay = 8
			})
		})
		layer.Add(this)
	}
	_frames(indices, from) {
		var a = []
		indices.forEach(i => { a.push(from[i]) })
		return a
	}
	Setup() {
		this.s = createSprite(this.p[0], this.p[1], 16, 16)
		this.s.addAnimation("attack", this.attack)
		this.s.addAnimation("idle0", this.idle0)
		this.s.addAnimation("idle1", this.idle1)
		this.s.addAnimation("idle2", this.idle2)
		this.s.addAnimation("walk", this.walk)
		var that = this
		var MobFsm = new StateMachine.factory({
			init: 'idle',
			transitions: [
				{ name: 'attack', from: '*', to: 'attack' },
				{ name: 'idle', from: '*', to: 'idle' },
				{ name: 'walk', from: '*', to: 'walk' }
			],
			methods: {
				onAttack: function () {
					that.s.changeAnimation("attack")
					that.s.animation.changeFrame(Math.floor(Math.random() * that._attackFrames.length))
				},
				onIdle: function () {
					var r = Math.floor(Math.random() * 3)
					switch (r) {
						case 0:
							that.s.changeAnimation("idle0")
							that.s.animation.changeFrame(Math.floor(Math.random() * that._idle0Frames.length))
							break
						case 1:
							that.s.changeAnimation("idle1")
							that.s.animation.changeFrame(Math.floor(Math.random() * that._idle1Frames.length))
							break
						case 2:
							that.s.changeAnimation("idle2")
							that.s.animation.changeFrame(Math.floor(Math.random() * that._idle2Frames.length))
							break
					}
				},
				onWalk: function () {
					that.s.changeAnimation("walk")
					that.s.animation.changeFrame(Math.floor(Math.random() * that._walkFrames.length))
				}
			}
		});
		this.fsm = new MobFsm()
	}
	get Fsm() {
		return this.fsm
	}
	Draw() {
		drawSprites()
	}
}
