export default {
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'normal',
    fontFamily: 'body',
  },
  variants: {
    solid: {
      bg: 'primary.100',
      color: 'white',
      _hover: {
        bg: 'primary.80',
      },
      _disabled: {
        bg: 'primary.40',
      },
      _active: {
        bg: 'primary.80',
      },
    },
    outline: {
      color: 'primary.100',
      borderColor: 'primary.100',
      _hover: {
        bg: 'primary.10',
      },
      _disabled: {
        color: 'primary.60',
        bg: 'primary.10',
        borderColor: 'primary.40',
      },
    },
  },
};
