import { Wrap } from './style'

export function Tag({ title, ...rest }) {
  return <Wrap {...rest}>{title}</Wrap>
}
