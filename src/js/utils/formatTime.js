import moment from 'moment'

export function formatTime (string) {
	return moment(string).format('MMMM Do, YYYY - hh:mm a')
} 