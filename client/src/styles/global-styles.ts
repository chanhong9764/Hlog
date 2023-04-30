import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  a {
    text-decoration: none;
  }

  body {
    width: 100%
    font-family: Pretendard;
    font-size: 14px;
    overflow: hidden;
  }
   
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
