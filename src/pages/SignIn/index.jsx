import { EnvelopeSimple, LockSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextButton } from '../../components/TextButton'
import { useAuth } from '../../hooks/auth'
import { Form, Wrapper } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Wrapper>
      <div className="content">
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <Form>
          <h2>faça seu login</h2>

          <Input
            Type="email"
            placeholder="E-mail"
            icon={EnvelopeSimple}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            Type="password"
            placeholder="Senha"
            icon={LockSimple}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" round onClick={handleSignIn} />
        </Form>

        <TextButton title="Criar conta" origin="/register" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Image of a laptop, cup of coffee and a book over the table"
      />
    </Wrapper>
  )
}
