import { styled } from 'styled-components'
import lock from '../../assets/lock.svg'

export const WrapInput = styled.input`
  width: 100%;
  height: 3.5rem;

  border-radius: 0.625rem;
  border: none;

  padding-left: 3rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900} ${lock};
  :placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1rem;
  }
`
