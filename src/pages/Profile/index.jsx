import {
  ArrowLeft,
  Camera,
  EnvelopeSimple,
  LockSimple,
  Upload,
  User,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Wrap, Wrapper } from './styles'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswOrdOld] = useState()
  const [passwordNew, setPasswOrdNew] = useState()
  const navigate = useNavigate()

  const avatarUrl =
    user.name === 'Gabriel Santos' && user.avatar
      ? 'https://avatars.githubusercontent.com/u/105078208?v=4'
      : user.avatar
      ? `${api.defaults.baseURL}/files/${user.avatar}`
      : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdate = Object.assign(user, Upload)

    await updateProfile({ user: userUpdate, avatarFile })
  }

  function handleUpdateAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)
    const url = URL.createObjectURL(file)
    setAvatar(url)
  }

  return (
    <Wrapper>
      <div className="content">
        <form>
          <Wrap>
            <img src={`${avatar}`} alt="image to avatar profile" />
            <label htmlFor="avatarImg">
              <span title="Change photo">
                <Camera size={20} />
              </span>
            </label>
            <input id="avatarImg" type="file" onChange={handleUpdateAvatar} />
          </Wrap>
          <div>
            <Input
              Type="text"
              placeholder="Name"
              icon={User}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              Type="email"
              placeholder="E-mail"
              icon={EnvelopeSimple}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              Type="password"
              placeholder="Current password"
              icon={LockSimple}
              onChange={(e) => setPasswOrdOld(e.target.value)}
            />
            <Input
              Type="password"
              placeholder="New password"
              icon={LockSimple}
              onChange={(e) => setPasswOrdNew(e.target.value)}
            />
          </div>
          <Button title="Save" round={true} onClick={handleUpdate} />
        </form>
        <button className="arrow" onClick={handleBack}>
          <ArrowLeft size={20} />
        </button>
      </div>
    </Wrapper>
  )
}
