import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes
} from '@material-ui/core/styles'
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

const commonStyle = {
  typography: {
    fontFamily: 'Raleway',
    h3: {
      fontWeight: 800
    },
    h4: {
      fontWeight: 600
    },
    body1: {
      fontSize: '1.2rem',
      textAlign: 'justify',
      fontWeight: 500
    }
  }
}

export const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: colors.gallery,
    },
    text: {
      primary: colors.ebonyClay,
      secondary: colors.dustyGray
    }
  },
  ...commonStyle
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
    ...commonStyle
  })
)

export default styles