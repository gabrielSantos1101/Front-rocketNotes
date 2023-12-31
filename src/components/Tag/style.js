import { styled } from 'styled-components'

export const Wrap = styled.span`
  font-family: 'Roboto', serif;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  width: fit-content;
  min-width: 4rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.375rem;
  border-radius: 5px;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  &:hover {
    filter: brightness(0.9);
  }
`
