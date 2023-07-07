import { Power } from '@phosphor-icons/react'
import { User } from '../User'
import { Wrapper } from './style'

export function Header() {
  return (
    <Wrapper>
      <User name="Gabriel Santos" user="gabrielSantos1101" />
      <button>
        <Power size={35} />
      </button>
    </Wrapper>
  )
}
