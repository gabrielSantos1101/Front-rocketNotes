import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { TextButton } from '../../components/TextButton'
import { Wrapper } from './style.js'

export function Details() {
  return (
    <Wrapper>
      <Header />
      <TextButton title={'Excluir nota'} />
      <h1>Introdução ao React</h1>
      <Section title="Links úteis">
        <ul>
          <li>
            <a href="#">teste</a>
          </li>
          <li>
            <a href="#">teste</a>
          </li>
          <li>
            <a href="#">teste</a>
          </li>
        </ul>
      </Section>
      <Section title="Marcadores">
        <Tag title="Express" />
        <Tag title="NodeJS" />
      </Section>
      <Button title="Voltar" />
    </Wrapper>
  )
}
