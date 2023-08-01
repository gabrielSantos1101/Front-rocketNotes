import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nice-calf-ring.cyclic.app/',
})
