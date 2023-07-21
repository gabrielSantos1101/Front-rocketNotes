import { Wrap } from './styles'

export function Section({ title, children, isInline = false }) {
  return (
    <Wrap $isinline={isInline}>
      <h2>{title}</h2>
      {children}
    </Wrap>
  )
}
