import { extendTheme } from '@chakra-ui/react';

import colors from './foundation/colors';
import fonts from './foundation/fonts';
import fontSizes from './foundation/fontSizes';

import spacing from './foundation/spacing';

import Button from './components/Button';

export const qualioTheme = extendTheme({
  fonts,
  fontSizes,
  colors,
  components: {
    Button,
  },
  sizes: {
    ...spacing,
  },
  space: spacing,
});
