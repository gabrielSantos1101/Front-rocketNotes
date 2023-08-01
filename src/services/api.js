import axios from 'axios'

export const api = axios.create({
  baseURL: 'backend-rocketnotes.gabrielsantosde.repl.co/',
})
