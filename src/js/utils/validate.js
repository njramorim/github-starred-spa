export function validate(val, actual) {
	return !!val.trim() && val !== actual ? true : false
}


