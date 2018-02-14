const nombre = 'jhon'

const dias = [
	'lunes',
	'martes',
	'miercoles',
	'jueves',
	'viernes',
	'sabado',
	'domingo'
]

function runner() {
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)) + min
}

let totalKm = 0
const l = dias.length
for(let i = 0; i < l; i++) {
	const km = runner()
	totalKm += km
	console.log(`el dia ${dias[i]} ${nombre} corrio ${km} Kms`)
}

const promedioKm = totalKm / l
console.log(`en promedio, ${nombre} corrio ${promedioKm.toFixed(2)} Kms`)