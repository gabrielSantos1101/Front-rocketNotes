import { Camera, EnvelopeSimple, LockSimple, User } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Wrapper } from './styles'
export function Profile() {
  return (
    <Wrapper>
      <div className="content">
        <div className="profile">
          <img src="https://github.com/gabrielSantos1101.png" alt="" />
          <span>
            <Camera size={20} />
          </span>
        </div>
        <form action="">
          <div>
            <Input Type="text" placeholder="Name" icon={User} />
            <Input Type="email" placeholder="E-mail" icon={EnvelopeSimple} />
          </div>
          <div>
            <Input
              Type="password"
              placeholder="Senha atual"
              icon={LockSimple}
            />
            <Input Type="password" placeholder="Nova senha" icon={LockSimple} />
          </div>
          <Button title="Salvar" />
        </form>
      </div>
    </Wrapper>
  )
}
