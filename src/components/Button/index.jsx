import { Wrap } from './styles'

export function Button({ title, loading = false, radius = false }) {
  return (
    <Wrap type="button" disabled={loading} radius={radius.toString()}>
      {title}
    </Wrap>
  )
}
