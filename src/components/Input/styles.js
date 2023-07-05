import { styled } from 'styled-components'

export const WrapInput = styled.input`
  width: 100%;
  height: 56px;

  border-radius: 10px;
  border: none;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  :placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1rem;
  }
`
