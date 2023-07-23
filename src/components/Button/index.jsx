import { Wrap } from './styles'

export function Button({ title, to, loading = false, round = false }) {
  return (
    <Wrap to={to} disabled={loading} $round={round}>
      {title}
    </Wrap>
  )
}
