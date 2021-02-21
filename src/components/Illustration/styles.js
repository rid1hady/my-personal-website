import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../colors'

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    position: 'relative'
  },
  shadow: {
    borderRadius: '0.5rem',
    backgroundColor: colors.bondiBlue,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  image: {
    zIndex: 2,
    position: 'absolute',
    right: 0,
    top: 0
  },
  mediumContainer: {
    width: '12rem',
    height: '12rem',
    [theme.breakpoints.down('sm')]: {
      width: '8rem',
      height: '8rem'
    }
  },
  mediumContent: {
    width: '9rem',
    height: '9rem',
    borderRadius: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '6rem',
      height: '6rem',
      borderRadius: '0.75rem'
    }
  },
  smallContainer: {
    width: '6rem',
    height: '6rem',
    [theme.breakpoints.down('sm')]: {
      width: '4rem',
      height: '4rem'
    }
  },
  smallContent: {
    width: '4.5rem',
    height: '4.5rem',
    borderRadius: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.25rem'
    }
  }
}))

export default styles
