import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../colors'

const styles = makeStyles(theme => ({
  container: {
    marginTop: '3rem'
  },
  mobileContainer: {
    backgroundColor: theme.palette.background.default,
    boxShadow: '0 -1px 10px 3px rgb(0 173 181 / 30%)',
    position: 'fixed',
    left: 0,
    bottom: 0,
    padding: '0.75em',
    zIndex: 20
  },
  item: {
    fontWeight: '600',
    color: theme.palette.text.primary,
    display: 'inline-block',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
      '&::after': {
        content: '""',
        display: 'block',
        borderBottom: `solid 5px ${colors.bondiBlue}`,
        borderRadius: '10px',
        transition: 'border-color 250ms ease-in-out'
      },
      '&:hover': {
        color: colors.bondiBlue,
        '&::after': {
          borderColor: '#276678'
        }
      }
    }
  },
  darkModeToggle: {
    color: theme.palette.text.primary
  },
  appIcon: {
    width: '3rem',
    height: '3rem',
    fill: 'white'
  }
}))

export default styles
