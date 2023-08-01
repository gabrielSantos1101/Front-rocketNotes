import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      localStorage.setItem('@RocketNotes:token', token)
      localStorage.setItem('@RocketNotes:user', JSON.stringify(user))

      // eslint-disable-next-line dot-notation
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ token, user })
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error('authentication failed')
      }
    }
    function getGreeting() {
      const { name } = JSON.parse(localStorage.getItem('@RocketNotes:user'))
      const hora = new Date().getHours()
      if (hora >= 6 && hora < 12) {
        return `Bom dia ${name}`
      } else if (hora >= 12 && hora < 18) {
        return `Boa tarde ${name}`
      } else {
        return `Boa noite ${name}`
      }
    }
    toast(`${getGreeting()}`)
  }

  function signOut() {
    localStorage.removeItem('@RocketNotes:token')
    localStorage.removeItem('@RocketNotes:user')
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUpload = new FormData()
        fileUpload.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUpload)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@RocketNotes:user', JSON.stringify(user))

      setData({ user, token: data.token })
      toast.success('Profile updated')
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error('update failed')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@RocketNotes:token')
    const user = localStorage.getItem('@RocketNotes:user')
    if (token && user) {
      // eslint-disable-next-line dot-notation
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user: JSON.parse(user) })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
