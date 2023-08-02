import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { Logout } from '../Logout'
import { User } from '../User'
import { Wrapper } from './style'

export function Header() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Wrapper>
      <User />
      <Logout onClick={handleSignOut} />
    </Wrapper>
  )
}
