import { EnvelopeSimple, LockSimple, User } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextButton } from '../../components/TextButton'
import { Wrapper } from './styles'
export function SignUp() {
  return (
    <Wrapper>
      <div className="content">
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <form action="">
          <h2>Crie sua conta</h2>
          <Input Type="text" placeholder="Name" icon={User} />
          <Input Type="email" placeholder="E-mail" icon={EnvelopeSimple} />
          <Input Type="password" placeholder="Senha" icon={LockSimple} />
          <Button title="Cadastrar" round={true} />
        </form>

        <TextButton title="Voltar para login" origin={'/'} />
      </div>
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Image of a laptop, cup of coffee and a book over the table"
      />
    </Wrapper>
  )
}
