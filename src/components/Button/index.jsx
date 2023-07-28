import { Wrap } from './styles'

export function Button({ onClick, title, to, loading = false, round = false }) {
  return (
    <Wrap onClick={onClick} to={to} disabled={loading} $round={round}>
      {title}
    </Wrap>
  )
}
