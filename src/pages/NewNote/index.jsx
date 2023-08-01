import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NewItem } from '../../components/Newitem'
import { Section } from '../../components/Section'
import { TextButton } from '../../components/TextButton'
import { Textarea } from '../../components/Textarea'
import { api } from '../../services/api'
import { Form, Wrapper } from './style.js'

export function NewNote() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [Tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddLink() {
    setLinks((preveState) => [...preveState, newLink])
    setNewLink('')
  }

  function handleAddTag() {
    setTags((preveState) => [...preveState, newTag])
    setNewTag('')
  }

  function handleRemoveLink(deleted) {
    setLinks((preveState) => preveState.filter((link) => link !== deleted))
  }
  function handleRemoveTag(deleted) {
    setTags((preveState) => preveState.filter((Tag) => Tag !== deleted))
  }

  async function handleNoteSubmit() {
    if (!title) {
      toast.error('please give a title')
      return
    }

    if (newTag || newLink) {
      toast.error('please submit all fields')
      return
    }

    await api.post('/notes', { title, description, links, tags: Tags })

    toast.success('Note created!🫶')
    navigate('/')
  }

  return (
    <Wrapper>
      <Header />
      <div className="content">
        <Form className="content" width={'40'}>
          <div className="top">
            <h1>Create Note</h1>
            <TextButton className="textButton" title={'return'} origin={'/'} />
          </div>
          <Input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea placeholder={'description'} setDescValue={setDescription} />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NewItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NewItem
              isNew
              placeholder="New Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Markers" isInline>
            <div className="tags">
              {Tags.map((tag, index) => (
                <NewItem
                  key={String(index)}
                  isFit
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NewItem
                isFit
                isNew
                placeholder="New tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Save" round onClick={handleNoteSubmit} />
        </Form>
      </div>
    </Wrapper>
  )
}
