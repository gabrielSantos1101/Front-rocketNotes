import { Plus, X } from '@phosphor-icons/react'
import React from 'react'
import { Wrap } from './styles'
export function NewItem({
  isNew = false,
  isFit = false,
  value,
  onClick,
  onChange,
  placeholder,
  ...rest
}) {
  return (
    <Wrap $isnew={isNew} $isfit={isFit}>
      <button type="button" onClick={onClick}>
        {isNew ? (
          <Plus size={20} weight="bold" />
        ) : (
          <X size={20} weight="bold" />
        )}
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={!isNew}
        {...rest}
      />
    </Wrap>
  )
}
