import { styled } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  gap: 6px;

  img {
    width: 4.375rem;
    height: 4.375rem;

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
`