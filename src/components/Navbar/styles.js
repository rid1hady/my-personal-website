import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../colors'

const styles = makeStyles(theme => ({
  scrollToTopContainer: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  },
  scrollToTopIcon: {
    color: colors.white,
    backgroundColor: colors.raisinBlack
  },
  appBar: {
    background: colors.white,
    color: colors.raisinBlack
  },
  appBarItemContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  appBarItem: {
    fontFamily: 'Raleway',
    borderBottom: '1px solid transparent',
    fontWeight: '600',
    fontSize: '1rem',
    display: 'inline-block',
    '&::after': {
      content: '""',
      display: 'block',
      borderBottom: `solid 3px ${colors.brightNavyBlue}`,
      transform: 'scaleX(0)',
      transition: 'transform 250ms ease-in-out'
    },
    '&:hover': {
      color: colors.brightNavyBlue,
      '&::after': {
        transform: 'scaleX(1)'
      }
    }
  },
  appIcon: {
    width: '1.5rem',
    height: '1.5rem'
  }
}))

export default styles
