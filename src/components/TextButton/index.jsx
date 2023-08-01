import { Link } from 'react-router-dom'
import { Wrap } from './styles'

export function TextButton({
  title,
  origin,
  onClick,
  isActive = false,
  ...rest
}) {
  return (
    <Wrap $isActive={isActive} {...rest}>
      <Link onClick={onClick} to={origin}>
        {title}
      </Link>
    </Wrap>
  )
}
