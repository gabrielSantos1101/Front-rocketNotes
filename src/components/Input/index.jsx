import { WrapInput } from './styles'

export function Input({ Type, icon: Icon, placeholder, ...rest }) {
  return (
    <WrapInput>
      <label htmlFor="input">
        {Icon && <Icon size={20} />}
        {/* if you don't have an icon use nothing */}
      </label>
      <input id="input" type={Type} placeholder={placeholder} {...rest} />
    </WrapInput>
  )
}
