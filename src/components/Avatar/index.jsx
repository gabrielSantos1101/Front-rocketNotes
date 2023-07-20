import { Camera } from '@phosphor-icons/react'
import { Wrap } from './styles'

export function Avatar() {
  return (
    <Wrap>
      <img src="https://github.com/gabrielSantos1101.png" alt="" />
      <label htmlFor="avatarImg">
        <span title="Alterar foto">
          <Camera size={20} />
        </span>
      </label>
      <input id="avatarImg" type="file"></input>
    </Wrap>
  )
}
