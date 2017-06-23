export function compareString(param, decrescent = true) {
	let num1 = decrescent ? -1 : 1
	let num2 = decrescent ? 1 : -1
	return (a, b) =>  {
		let aParam = a[param].toLowerCase()
		let bParam = b[param].toLowerCase()
  	return aParam > bParam ? num1 : aParam < bParam ? num2 : 0
	}
}


