export function checkOrder (context, param, descrescent) {
	return !(context.state.order === `${param}-${descrescent}`)
}