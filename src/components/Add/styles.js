import { styled } from 'styled-components'

export const Wrap = styled.input`
  width: ${({ fitContent }) => (fitContent ? 'fit-content' : '100%')};
  height: 3.5rem;

  padding-inline: 1.25rem;

  border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.625rem;
`
