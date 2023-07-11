import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { TextButton } from '../../components/TextButton'
import { Wrapper } from './style.js'

export function Details({ width }) {
  return (
    <Wrapper width={'40'}>
      <Header />
      <div className="wrap">
        <TextButton className="textButton" title={'Excluir nota'} />

        <h1>Introdução ao React</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

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
      </div>
    </Wrapper>
  )
}
