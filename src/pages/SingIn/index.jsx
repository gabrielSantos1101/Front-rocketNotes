import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SingIn() {
  return (
    <form action="">
      <Input Type="email" placeholder="E-mail" />
      <Input Type="password" placeholder="Senha" />
      <Button title="Entrar" />
      <Button title="teste" />
    </form>
  )
}
