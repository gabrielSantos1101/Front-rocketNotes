import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ token, user })
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error('authentication failed')
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
