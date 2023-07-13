import { Tag } from '../Tag'
import { Wrap } from './styles'

export function Note({ title }) {
  return (
    <Wrap>
      <h3>{title}</h3>
      <div>
        <Tag title="React" />
        <Tag title="React" />
      </div>
    </Wrap>
  )
}
