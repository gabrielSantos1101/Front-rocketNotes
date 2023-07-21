import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NewItem } from '../../components/Newitem'
import { Section } from '../../components/Section'
import { TextButton } from '../../components/TextButton'
import { Textarea } from '../../components/Textarea'
import { Form, Wrapper } from './style.js'

export function NewNote({ width }) {
  return (
    <Wrapper>
      <Header />
      <div className="content">
        <Form className="content" width={'40'}>
          <div>
            <h1>Criar nota</h1>
            <TextButton className="textButton" title={'voltar'} />
          </div>
          <Input type="text" placeholder="Título" />
          <Textarea placeholder={'Observações'} />

          <Section title="Links úteis">
            <NewItem
              placeholder="Novo link"
              value="https://github.com"
              isNew={false}
            />
            <NewItem placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <NewItem
              placeholder="Novo marcador"
              isFit={true}
              isNew={false}
              value="Node"
            />
            <NewItem placeholder="Novo marcador" isFit={true} />
          </Section>
          <Button title="salvar" round />
        </Form>
      </div>
    </Wrapper>
  )
}
