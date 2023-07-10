import { Wrap } from './styles'

export function TextButton({ title, ...rest }) {
  return (
    <Wrap t ype="button" {...rest}>
      {title}
    </Wrap>
  )
}
