import { Wrap } from './styles'

export function Add({ fitContent = false, title }) {
  return <Wrap placeholder={title} fitContent={fitContent.toString()} />
}
