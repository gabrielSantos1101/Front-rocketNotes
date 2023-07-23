import { Link } from 'react-router-dom'
import { Wrap } from './styles'

export function TextButton({ title, origin, isActive = false, ...rest }) {
  return (
    <Wrap $isActive={isActive.toString()} {...rest}>
      <Link to={origin}>{title}</Link>
    </Wrap>
  )
}
