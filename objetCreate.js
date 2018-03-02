/*function punto (x,y) {
	this.x = x
	this.y = y
}

punto.prototype.moverEnX = function moverEnX(x) {
	this.x += x
}

punto.prototype.moverEnY = function moverEnY(y) {
	this.y += y
}

punto.prototype.distancia = function distancia(p) {
	const x = this.x - p.x
	const y = this.y - p.y

	return Math.sqrt(x * x + y * y)
}*/

const punto = {
	init: function(x,y) {
		this.x = x
		this.y = y
	},
	moverEnX: function moverEnX(x) {
		this.x += x
	},
	moverEnY: function moverEnY(y) {
		this.y += y
	}
}

const p1 = new punto(0,4)
const p2 = new punto(3,0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))	