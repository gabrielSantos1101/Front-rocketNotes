import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { TextButton } from '../../components/TextButton'
import { Brand, Menu, NewContent, Search, Wrap, Wrapper } from './styles'

export function Home() {
  return (
    <Wrapper>
      <Menu>
        <Brand>
          <h1>RocketNotes</h1>
        </Brand>

        <ul>
          <li>
            <TextButton title="Todos" />
          </li>
          <li>
            <TextButton title="Frontend" />
          </li>
          <li>
            <TextButton title="Node" />
          </li>
          <li>
            <TextButton title="React" />
          </li>
        </ul>
        <NewContent>
          <Button title="+ Criar nota" round={true} />
        </NewContent>
      </Menu>
      <Wrap>
        <Header />
        <div className="content">
          <Search>
            <Input placeholder="Pesquisar Pelo título" Type="search" />
          </Search>
          <Section title="Minhas notas">
            <Note
              data={{
                title: 'React Modal',
                tags: [{ id: 1, name: 'React' }],
              }}
            />
            <Note
              data={{
                title: 'Exemplo de Middleware',
                tags: [
                  { id: 1, name: 'express' },
                  { id: 2, name: 'nodeJS' },
                ],
              }}
            />
          </Section>
        </div>
      </Wrap>
    </Wrapper>
  )
}
