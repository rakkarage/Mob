class Mob {
	constructor(data, image, layer, p) {
		this.p = p
		var that = this
		loadJSON(data, function (frames) {
			that.ss = loadSpriteSheet(image, frames)
			that._attackFrames = that.attackFrames(frames.frames)
			that.attack = loadAnimation(new SpriteSheet(image, that._attackFrames))
			that.attack.frameDelay = 8
			that._idle0Frames = that.idle0Frames(frames.frames)
			that.idle0 = loadAnimation(new SpriteSheet(image, that._idle0Frames))
			that.idle0.frameDelay = 16
			that._idle1Frames = that.idle1Frames(frames.frames)
			that.idle1 = loadAnimation(new SpriteSheet(image, that._idle1Frames))
			that.idle1.frameDelay = 16
			that._idle2Frames = that.idle2Frames(frames.frames)
			that.idle2 = loadAnimation(new SpriteSheet(image, that._idle2Frames))
			that.idle2.frameDelay = 16
			that._walkFrames = that.walkFrames(frames.frames)
			that.walk = loadAnimation(new SpriteSheet(image, that._walkFrames))
			that.walk.frameDelay = 16
		})
		layer.Add(this)
	}
	Setup() {
		this.s = createSprite(this.p[0], this.p[1], 16, 16)
		this.s.addAnimation("attack", this.attack)
		this.s.addAnimation("idle0", this.idle0)
		this.s.addAnimation("idle1", this.idle1)
		this.s.addAnimation("idle2", this.idle2)
		this.s.addAnimation("walk", this.walk)
		var r = Math.floor(Math.random() * 3)
		switch (r) {
			case 0:
				this.s.changeAnimation("idle0")
				var r = Math.floor(Math.random() * this._idle0Frames.length)
				this.s.animation.changeFrame()
				break
			case 1:
				this.s.changeAnimation("idle1")
				this.s.animation.changeFrame(Math.floor(Math.random() * this._idle1Frames.length))
				break
			case 2:
				this.s.changeAnimation("idle2")
				this.s.animation.changeFrame(Math.floor(Math.random() * this._idle2Frames.length))
				break
		}
	}
	Draw() {
		drawSprites()
	}
}
