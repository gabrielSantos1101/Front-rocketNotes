import { Power } from '@phosphor-icons/react'
import { Wrap } from './styles'

export function Logout({ onClick }) {
  return (
    <Wrap>
      <Power onClick={onClick} size={35} />
    </Wrap>
  )
}
