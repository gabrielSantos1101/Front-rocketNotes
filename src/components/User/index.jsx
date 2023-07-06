import { Wrap } from './style'

export function User({ name, user }) {
  return (
    <Wrap>
      <img src={`https://github.com/${user}.png`} alt="Profile image" />
      <div>
        <span>Bem vindo</span>
        <h2>{name}</h2>
      </div>
    </Wrap>
  )
}
