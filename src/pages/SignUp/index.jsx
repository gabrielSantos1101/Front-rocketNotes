import { EnvelopeSimple, LockSimple, User } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextButton } from '../../components/TextButton'
import { api } from '../../services/api'
import { Wrapper } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleSignUp() {
    if (!name || !email || !password) {
      toast.error('please fill all fields')
      return
    }

    await api
      .post('/users', {
        name,
        email,
        password,
      })
      .then(() => {
        toast.success('Account created successfully')
        navigate(-1)
      })
      .catch((er) => {
        if (er.response) {
          toast.error(er.response.data.message)
        } else {
          toast.error(`try again later`)
        }
      })
  }

  return (
    <Wrapper>
      <div className="content">
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links.</p>
        <form action="">
          <h2>Create your account</h2>
          <Input
            Type="text"
            placeholder="Name"
            icon={User}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button
            title="Register"
            round={true}
            onClick={() => {
              handleSignUp()
            }}
          />
        </form>

        <TextButton
          className="footerButton"
          title="Go back to login"
          onClick={() => handleBack()}
        />
      </div>
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Image of a laptop, cup of coffee and a book over the table"
      />
    </Wrapper>
  )
}
