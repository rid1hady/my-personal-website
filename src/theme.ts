import colors from './colors'

interface ThemePallette {
  text: string;
  background: string;
}

export const lightTheme : ThemePallette = {
  text: colors.ebonyClay,
  background: colors.gallery
}

export const darkTheme : ThemePallette = {
  text: colors.gallery,
  background: colors.brightGray
}
