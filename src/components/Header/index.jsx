import { useAuth } from '../../hooks/auth'
import { Logout } from '../Logout'
import { User } from '../User'
import { Wrapper } from './style'

export function Header() {
  const { signOut } = useAuth()

  return (
    <Wrapper>
      <User />
      <Logout onClick={signOut} />
    </Wrapper>
  )
}
