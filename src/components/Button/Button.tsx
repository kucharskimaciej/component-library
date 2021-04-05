import React from 'react';
import styled, {css} from "styled-components";
import {space, SpaceProps} from "styled-system";
import {themeGet} from "@styled-system/theme-get";
import {QualioTheme} from "../../lib/theme";

type Props = {
    variant?: "primary" | "secondary";
} & SpaceProps<QualioTheme>;


const primaryButtonStyles = css`
  background-color: ${themeGet("colors.blue.100")};
  color: ${themeGet("colors.white")};

  &:hover {
    background-color: ${themeGet("colors.blue.80")};
    border-color: ${themeGet("colors.blue.80")};
  }
`;
const secondaryButtonStyles = css`
  color: ${themeGet("colors.blue.100")};
  
  &:hover {
    background-color: ${themeGet("colors.blue.10")};
    border-color: ${themeGet("colors.blue.80")};
  }
`;

export const Button = styled.button.attrs<Props>(props => ({ ...props, variant: props.variant || 'primary' }))`
  border: ${themeGet("borders.1")} ${themeGet("colors.blue.100")};
  border-radius: ${themeGet("radii.full")};
  padding: ${themeGet("sizes.5")} ${themeGet("sizes.6")};

  font-size: ${themeGet("fontSizes.body.1")};

  cursor: pointer;
  outline: none;
  
  ${props => props.variant === 'primary' ? primaryButtonStyles : secondaryButtonStyles}

  ${space}
`
