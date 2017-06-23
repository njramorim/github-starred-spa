import { getData } from './getData'
import { languageOptions } from './languageOptions'

export function dataHandler(context) {
	const url = `https://api.github.com/users/${context.state.user}/starred`
	return getData(url)
    .then( data => {
      if (data.length === 0) {
        context.setState({
          error: true,
          errorMessage: 'user has no starred repos.'
        })

      } else {
        context.setState({
          error: false,
          filterBy: 'SHOW ALL',
          lastUser: context.state.user ,
          order: 'id',
          stars: data, 
          unfilteredStars: data, 
          ready: true
        })

        let filters = languageOptions(context)
        context.setState({
          filters
        })
      }
    })
    .catch( error => {
    	context.setState({
        error: true,
        errorMessage: 'could not retrieve userName.',
        user: ''
      })
    })
}
