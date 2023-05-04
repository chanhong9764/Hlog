import { DefaultTheme } from 'styled-components';
import '../assets/fonts/Font.css';

const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px',
};

const media = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const darkTheme: DefaultTheme = {
  primaryColor: 'black',
  secondaryColor: '#121212',
};

const lightTheme: DefaultTheme = {
  primaryColor: 'white',
  secondaryColor: '#6667AB',
};

export const theme = {
  darkTheme,
  lightTheme,
  media,
};

export default theme;
