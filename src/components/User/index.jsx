import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Wrap } from './style'

export function User() {
  const { user } = useAuth()
  const avatarUrl =
    user.name === 'Gabriel Santos' && user.avatar
      ? 'https://avatars.githubusercontent.com/u/105078208?v=4'
      : user.avatar
      ? `${api.defaults.baseURL}/files/${user.avatar}`
      : avatarPlaceholder

  return (
    <Wrap to="/profile">
      <img src={avatarUrl} alt="Profile image" />
      <div>
        <span>Bem vindo</span>
        <h2>{user.name}</h2>
      </div>
    </Wrap>
  )
}
