class Layer {
	constructor() {
		this.children = []
	}
	Add(i) {
		this.children.push(i)
	}
	Setup() {
		this.children.forEach(i => { i.Setup() })
	}
	Draw() {
		this.children.forEach(i => { i.Draw() })
	}
}
