import { fontSizes, fontWeights, lineHeights, fonts} from "./typography";
import colors from "./colors"
import radii from "./radii";
import space from "./space";
import sizes from "./sizes";

const theme = {
    breakpoints: [],
    borders: [
        0,
        '1px solid'
    ],
    fontWeights,
    fontSizes,
    lineHeights,
    fonts,
    colors,
    radii,
    space,
    sizes
}

export type QualioTheme = typeof theme;

export default theme;
