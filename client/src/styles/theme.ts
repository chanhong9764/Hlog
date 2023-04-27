import { DefaultTheme } from 'styled-components';

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
  bgColor: '#353b48',
  textColor: 'black',
  accentColor: '#487eb0',
};

const lightTheme: DefaultTheme = {
  bgColor: '#f5f6fa',
  textColor: '#353b48',
  accentColor: '#487eb0',
};

export const theme = {
  darkTheme,
  lightTheme,
  media,
};

export default theme;
