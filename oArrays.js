function suma(...numeros) {
	console.log(numeros)

	const resultado = numeros.reduce(function(contador, numero) {
		contador += numero
		return contador
	}, 0)
	return resultado
}

suma(4 , 8, 12, 8954, 7)