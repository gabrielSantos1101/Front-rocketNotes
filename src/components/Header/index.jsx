import { Logout } from '../Logout'
import { User } from '../User'
import { Wrapper } from './style'

export function Header() {
  return (
    <Wrapper>
      <User name="Gabriel Santos" user="gabrielSantos1101" />
      <Logout />
    </Wrapper>
  )
}
