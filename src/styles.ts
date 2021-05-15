import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes
} from '@material-ui/core/styles'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import colors from './colors'

const styles = makeStyles((theme) => ({
  App: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    border: '0.75rem solid',
    borderColor: colors.bondiBlue
  }
}))

const typographyOptions : TypographyOptions = {
  fontFamily: 'Raleway',
  h3: {
    fontWeight: 800
  },
  h4: {
    fontWeight: 600
  },
  body1: {
    fontWeight: 500
  }
}

export const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: colors.white,
    },
    text: {
      primary: colors.ebonyClay,
      secondary: colors.dustyGray
    }
  },
  typography: typographyOptions
}))

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: colors.brightGray
      },
      text: {
        primary: colors.gallery,
        secondary: colors.gallery
      }
    },
    typography: typographyOptions
  })
)

export default styles