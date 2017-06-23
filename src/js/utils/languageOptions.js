export function languageOptions (context) {
	let unfilteredStars = context.state.unfilteredStars
	let language = unfilteredStars.map((item, index) => {
		return item['language']
	})

	let onlyOnce = ['SHOW ALL', ...new Set(language)]
	return onlyOnce
}