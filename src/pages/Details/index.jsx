import { Add } from '../../components/Add'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Wrapper } from './style.js'

export function Details() {
  return (
    <Wrapper>
      <Header />
      <button>Excluir Nota</button>
      <h1>Introdução ao React</h1>

      <Section title="Links úteis">
        <ul>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </Section>

      <Section title="Marcadores">
        <ul>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </Section>

      <Add title={'Novo Link'} fitContent />

      <Button title="Voltar" />
    </Wrapper>
  )
}
