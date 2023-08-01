import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { TextButton } from '../../components/TextButton'
import { api } from '../../services/api'
import { Brand, Menu, NewContent, Search, Wrap, Wrapper } from './styles'

export function Home() {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagSelected, setTagSelected] = useState([])
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  function handleTagSelected(tag) {
    if (tag === 'all') {
      return setTagSelected([])
    }

    if (tagSelected.includes(tag)) {
      const newTagSelected = tagSelected.filter((t) => t !== tag)
      setTagSelected(newTagSelected)
    } else {
      const newTagSelected = [...tagSelected, tag]
      setTagSelected(newTagSelected)
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagSelected}`,
      )
      setNotes(response.data)
    }
    fetchTags()
  }, [tagSelected, search])

  return (
    <Wrapper>
      <Menu>
        <Brand>
          <h1>RocketNotes</h1>
        </Brand>

        <ul>
          <li>
            <TextButton
              title="Todos"
              onClick={() => handleTagSelected('all')}
              isActive={tagSelected.length === 0}
            />
          </li>
          {tags &&
            tags.map((tag) => (
              <li key={tag.id}>
                <TextButton
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagSelected.includes(tag.name)}
                />
              </li>
            ))}
        </ul>
        <NewContent>
          <Button to="/new" title="+ Criar nota" />
        </NewContent>
      </Menu>
      <Wrap>
        <Header />
        <div className="content">
          <Search>
            <Input
              placeholder="Search by title"
              Type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
          {notes.length === 0 ? (
            <Section title="You have no notes registered"></Section>
          ) : (
            <Section title="My notes">
              {notes.map((note) => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))}
            </Section>
          )}
        </div>
      </Wrap>
    </Wrapper>
  )
}
