import { Wrap } from './styles'

export function TextButton({ title, ...rest }) {
  return (
    <Wrap type="button" {...rest}>
      {title}
    </Wrap>
  )
}
