import { styled } from 'styled-components'

export const Wrap = styled.button`
  height: fit-content;
  display: grid;

  border-radius: 9999px;
  border: none;
  background: none;

  :hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
