import axios from 'axios'

const apiOpenweather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export default apiOpenweather
