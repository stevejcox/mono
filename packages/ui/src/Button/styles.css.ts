import { styleVariants, style } from '@vanilla-extract/css';

const base = style({ padding: 12 });

export const background = styleVariants({
  primary: [base, { background: 'blue' }],
  secondary: [base, { background: 'aqua' }]
});