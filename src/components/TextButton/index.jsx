import { Wrap } from './styles'

export function TextButton({ title, isActive = false, ...rest }) {
  return (
    <Wrap type="button" $isActive={isActive.toString()} {...rest}>
      {title}
    </Wrap>
  )
}
