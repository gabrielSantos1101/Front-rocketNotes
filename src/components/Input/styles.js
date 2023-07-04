import { styled } from 'styled-components'

export const InputStyle = styled.input`
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  width: 100%;
  height: 56px;

  :placeholder-shown {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1rem;
  }
`
