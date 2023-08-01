import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { TextButton } from '../../components/TextButton'
import { api } from '../../services/api'
import { Wrapper } from './style.js'

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Are you sure?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      toast.success('Note deleted! 💣')
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNotes()
  }, [])

  return (
    <Wrapper width={'40'}>
      <Header />
      <div className="wrap">
        {data && (
          <main className="content">
            <TextButton
              className="textButton"
              title={'Delete'}
              onClick={handleRemove}
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && (
              <Section title="Useful links">
                <ul>
                  {data.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            <Section title="Markers">
              <div className="tags">
                <Tag title="Express" />
                <Tag title="NodeJS" />
              </div>
            </Section>
            <Button title="Return" round onClick={handleBack} />
          </main>
        )}
      </div>
    </Wrapper>
  )
}
