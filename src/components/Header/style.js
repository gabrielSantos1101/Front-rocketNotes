import { styled } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.625rem;
  padding-inline: 2.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: #f1f1f1;
`
