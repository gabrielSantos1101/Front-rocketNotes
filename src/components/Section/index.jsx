import { Wrap } from './styles'

export function Section({ title, children }) {
  return (
    <Wrap>
      <h2>{title}</h2>
      {children}
    </Wrap>
  )
}
