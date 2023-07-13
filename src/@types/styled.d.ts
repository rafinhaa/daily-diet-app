import theme from "@theme/darkTheme";
import "styled-components/native";

declare module "styled-components/native" {
  type Theme = typeof theme;
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      GREEN_LIGHT: string;
      GREEN_MID: string;
      GREEN_DARK: string;
      RED_LIGHT: string;
      RED_MID: string;
      RED_DARK: string;
      GRAY_700: string;
      GRAY_600: string;
      GRAY_500: string;
      GRAY_400: string;
      GRAY_300: string;
      GRAY_200: string;
      GRAY_100: string;
    };
    FONTS: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      TINY: number;
      SMALL: number;
      MEDIUM: number;
      LARGE: number;
      EXTRA_LARGE: number;
      SUPER_LARGE: number;
    };
    LINE_HEIGHT: {
      TINY: number;
      SMALL: number;
      MEDIUM: number;
      LARGE: number;
      EXTRA_LARGE: number;
      SUPER_LARGE: number;
    };
  }
}
