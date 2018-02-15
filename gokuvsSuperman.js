let LifeGoku = 100
let LifeSuperMan = 100

const minPower = 5
const maxPower = 12

const ambosSiguenVivos = () => { LifeGoku > 0 && LifeSuperMan > 0}

const calcularGolpe = () => Math.round(Math.random() * (MaxPower - MinPower) + MinPower)

const gokuSigueVivo = () => LifeGoku > 0

let round = 0

while(ambosSiguenVivos()) {
	round++
 	console.log(`round ${round}`)

 	const golpeGoku = calcularGolpe()
 	const golpeSuperman = calcularGolpe()

 	if(golpeGoku > golpeSuperman) {
 		console.log(`goku ataca a superman con un golpe de ${golpeGoku}`)
 		vidaSuperman -= golpeGoku
 		console.log(`superman queda en ${LifeSuperMan} de vida`)
 	}else{
 		console.log(`superman ataca a goku con un golpe de ${golpeSuperman}`)
 		vidaGoku -= golpeSuperman
 		console.log(`goku queda en ${LifeGoku} de vida`)
 	}
 } 

 if(gokuSigueVivo()) {
 	console.log(`goku gano la pelea su vida es de ${LifeGoku}`)
 }else {
 	console.log(`superman gano la pelea su vida es de ${LifeSuperMan}`)
 }