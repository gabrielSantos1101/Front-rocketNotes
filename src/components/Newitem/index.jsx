import { Plus, X } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Wrap } from './styles'
export function NewItem({
  isNew = true,
  isFit = false,
  value,
  $onClick,
  placeholder,
  ...rest
}) {
  const inputId = uuidv4()
  const [text, setText] = useState(value)

  return (
    <Wrap $isnew={!value} $isfit={isFit}>
      <button type="button" onClick={$onClick}>
        {isNew ? (
          <Plus size={20} weight="bold" />
        ) : (
          <X size={20} weight="bold" />
        )}
      </button>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isNew}
        {...rest}
      />
    </Wrap>
  )
}
