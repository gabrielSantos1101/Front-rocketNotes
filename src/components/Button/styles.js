import { styled } from 'styled-components'

export const Wrap = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-weight: 500;
  font-family: 'Roboto Slab', serif;
  /* text-transform: uppercase; */

  border: 0;
  border-radius: ${({ radius }) => (radius ? 'none' : '10px')};

  padding: 0 16px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }
`
