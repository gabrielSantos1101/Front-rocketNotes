import { styled } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  gap: 6px;

  img {
    width: 4rem;
    height: 4rem;

    border-radius: 9999px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-block: auto;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  ::selection {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
