import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../../colors'

const styles = makeStyles(theme => ({
  title: {
    display: 'inline-block',
    fontWeight: 600,
    textAlign: 'left',
    paddingRight: '0.75rem',
  },
  duration: {
    display: 'inline-block',
    color: theme.palette.text.secondary
  },
  subtitle: {
    fontWeight: 500,
    textAlign: 'left'
  },
  description: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  },
  tag: {
    display: 'inline-block',
    paddingRight: '0.75rem',
    color: colors.bondiBlue
  }
}))

export default styles
