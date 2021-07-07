import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  nav, .sc-dkIXFM{
    display: none !important;
  }
  .sc-dWdcrH{
    margin: 0;
    max-width: 100%;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
  }
  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
  #swap-page h2{
    margin: 20px 20px 20px 60px
  }
  #swap-page h2:before {
    position: absolute;
    top: 20px;
    left: 20px;
    background-image: url('images/logo/csmart-b.png');
    background-size: 130px 50px;
    display: inline-block;
    width: 130px;
    height: 50px;
    content: "";
  }
  div[color=textSubtle]{
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
  }
`;

export default GlobalStyle
