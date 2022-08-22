import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333/api'

export const getCovidList = () => axios.get('/list').then(res => res.data)
