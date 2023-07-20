import { styled } from 'styled-components'

export const WrapInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  position: relative;

  border-radius: 0.625rem;

  & label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.75rem;
    height: 1.25rem;

    & svg path {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  & input {
    width: 100%;
    height: 100%;
    padding-inline: ${({ $isicon }) => ($isicon ? `2.5rem 1rem` : '1rem')};
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
    font-family: 'Roboto Slab', serif;
  }
`
