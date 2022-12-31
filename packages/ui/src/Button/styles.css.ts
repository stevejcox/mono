import { styleVariants, style } from '@vanilla-extract/css';
import { vars } from 'themes.base';

const base = style({ padding: 12 });

export const background = styleVariants({
  primary: [base, { background: vars.color.brand }],
  secondary: [base, { background: 'aqua' }]
});