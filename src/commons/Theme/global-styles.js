import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0px;
    box-sizing:border-box;
  };
  a{
    text-decoration:none;
  }
  img{
    max-width:100%;
  }
`;
export default GlobalStyle;
