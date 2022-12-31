import { createTheme } from '@vanilla-extract/css';
import { vars } from 'themes.base';

export const brand = createTheme(vars, {
  color: {
    brand: 'red'
  },
  font: {
    body: 'helvetica'
  }
});
