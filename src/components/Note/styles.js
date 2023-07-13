import { styled } from 'styled-components'

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 1.375rem 1rem;
  border-radius: 0.625rem;

  ::selection {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  & h3 {
    font-size: 1.5rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 1.5rem;
  }

  & div {
    display: flex;
    gap: 0.375rem;
  }
`
