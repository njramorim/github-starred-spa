import axios from 'axios'

export function getData(url) {
  return axios({method: 'get', url: url})
  	.then(response => response.data)
}


