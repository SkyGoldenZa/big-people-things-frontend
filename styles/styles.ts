import { createGlobalStyle } from 'styled-components';
import global from './global';
import { dark, light } from './theme'

export const GlobalStyles = createGlobalStyle`${global}}`;
export const lightTheme = light;
export const darkTheme = dark;
