import { styled } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${({ $isfit }) => (!$isfit ? `width: 100%;` : 'width: fit-content;')}
  height: 3.5rem;
  padding: 1px;

  & button {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);

    width: 1.375rem;
    height: 1.375rem;

    border-radius: 50%;
    border: none;
    background: none;

    & svg path {
      color: ${({ $isnew, theme }) =>
        $isnew ? `${theme.COLORS.ORANGE}` : 'red'};
    }
  }

  & input {
    width: 100%;
    height: 100%;

    padding-inline: 1rem;
    border-radius: 0.625rem;

    background: ${({ $isnew, theme }) =>
      $isnew ? 'none' : `${theme.COLORS.BACKGROUND_900}`};
    border: ${({ $isnew, theme }) =>
      !$isnew ? 'none' : `2px dashed ${theme.COLORS.GRAY_300}`};

    transition: all 0.2s;
    cursor: ${({ $isnew }) => (!$isnew ? 'pointer' : 'type')};

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.ORANGE};

      outline: none;
    }
  }

  :placeholder {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
