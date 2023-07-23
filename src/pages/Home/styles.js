import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & .content {
    padding-inline: 4rem;
  }
`

export const Menu = styled.div`
  width: 15.625rem;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    height: calc(90% - 8.3rem);

    margin-top: 4rem;

    list-style: none;

    & li button {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    & li button:hover {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`

export const Brand = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 6.6rem;

  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 0.8rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Search = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 8rem;
  width: 100%;

  margin-bottom: 3rem;
`

export const NewContent = styled.div`
  width: 100%;

  display: flex;
  margin-block: auto;

  & a {
    margin-top: 0;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`
