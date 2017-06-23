export function compare(param, decrescent = true) {
	let num1 = decrescent ? -1 : 1
	let num2 = decrescent ? 1 : -1
	return (a, b) =>  {
  	return a[param] > b[param] ? num1 : a[param] < b[param] ? num2 : 0
	}
}


