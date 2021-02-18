import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../colors'

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    position: 'relative',
    width: '6rem',
    height: '6rem'
  },
  shadow: {
    borderRadius: '0.5rem',
    backgroundColor: colors.bondiBlue,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '4.5rem',
    height: '4.5rem'
  },
  image: {
    zIndex: 2,
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: '0.5rem',
    width: '4.5rem',
    height: '4.5rem'
  },
  mediumContainer: {
    width: '12rem',
    height: '12rem',
    borderRadius: '1rem'
  },
  mediumContent: {
    width: '9rem',
    height: '9rem',
    borderRadius: '1rem'
  }
}))

export default styles
