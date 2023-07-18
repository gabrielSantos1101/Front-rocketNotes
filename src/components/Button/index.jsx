import { Wrap } from './styles'

export function Button({ title, loading = false, round = false }) {
  return (
    <Wrap type="button" disabled={loading} $round={round.toString()}>
      {title}
    </Wrap>
  )
}
