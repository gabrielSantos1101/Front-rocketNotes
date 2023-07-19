import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    font-family: 'Roboto Slab', serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
      
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: #f1f1f1;

    #root {
      height: 100%;
      width: 100%;
    }
}

h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection,p::selection, span::selection {
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
}

a {
    text-decoration: none;
    color: inherit;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}

div::-webkit-scrollbar {
  width: 1.25rem;
}

div::-webkit-scrollbar-track {
  margin-block-start: 2.75rem;
}

div::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 1rem 1rem ${({ theme }) => theme.COLORS.ORANGE};
  border: solid 7px transparent;
  border-radius: 2rem;
  background-clip: padding-box;
}
`
