import { createGlobalStyle } from 'styled-components';

import Background from '../images/Background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fjalla One", sans-serif;
  }
  #root {
    background: url(${Background});
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    color: #fff;
  }
  button {
    cursor: pointer;
  }
`;
