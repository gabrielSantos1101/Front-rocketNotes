import { Camera } from '@phosphor-icons/react'
import { Wrap } from './styles'

export function Avatar({ url, onChange }) {
  return (
    <Wrap>
      <img src={`${url}`} alt="image to avatar profile" />
      <label htmlFor="avatarImg">
        <span title="Change photo">
          <Camera size={20} />
        </span>
      </label>
      <input id="avatarImg" type="file" onChange={onChange} />
    </Wrap>
  )
}
