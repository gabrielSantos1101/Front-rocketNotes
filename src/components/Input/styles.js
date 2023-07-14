import { styled } from 'styled-components'

export const WrapInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;

  border-radius: 0.625rem;

  & label {
    height: 100%;

    & svg {
      margin-left: 0.75rem;
    }
  }

  & input {
    width: 100%;
    height: 100%;
    padding-inline: 1rem;
    border-radius: 0.625rem;
    background: transparent;
    border: none;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  :placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1rem;
  }
`
