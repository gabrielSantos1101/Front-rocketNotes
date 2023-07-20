import {
  ArrowLeft,
  EnvelopeSimple,
  LockSimple,
  User,
} from '@phosphor-icons/react'
import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Wrapper } from './styles'

export function Profile() {
  return (
    <Wrapper>
      <div className="content">
        <Avatar />
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
          <Button title="Salvar" round={true} />
        </form>
        <button className="arrow">
          <ArrowLeft size={20} />
        </button>
      </div>
    </Wrapper>
  )
}
