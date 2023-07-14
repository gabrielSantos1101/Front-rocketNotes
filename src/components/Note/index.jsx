import { Tag } from '../Tag'
import { Wrap } from './styles'

export function Note({ data, ...rest }) {
  return (
    <Wrap {...rest}>
      <h3>{data.title}</h3>
      <div>
        {data.tags.map((tag) => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </div>
    </Wrap>
  )
}
