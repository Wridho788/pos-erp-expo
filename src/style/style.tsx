import { createGlobalStyle } from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    ${(isTablet ? `
      font-size: 18px;
    ` : `
      font-size: 14px;
    `)}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.main};
  }
`;

export default GlobalStyle;
