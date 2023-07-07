import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Wrapper } from './styles'
export function SingIn() {
  return (
    <Wrapper>
      <div className="singIn">
        <form action="">
          <Input Type="email" placeholder="E-mail" />
          <Input Type="password" placeholder="Senha" />
          <Button title="Entrar" radius />
          <Button title="teste" />
        </form>
      </div>
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Image of a laptop, cup of coffee and a book over the table"
      />
    </Wrapper>
  )
}
