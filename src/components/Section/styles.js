import { styled } from 'styled-components'

export const Wrap = styled.div`
  & h2 {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.25rem;
    font-weight: 400;
  }
`
