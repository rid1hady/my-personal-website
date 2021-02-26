import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../colors'

const styles = makeStyles(theme => ({
  footerContainer: {
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5rem'
    }
  },
  text: {
    fontWeight: 600,
    display: 'inline-block',
    '&::before': {
      content: '""',
      display: 'block',
      borderBottom: `solid 3px ${colors.bondiBlue}`,
      borderRadius: '10px'
    }
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    color: colors.bondiBlue
  }
}))

export default styles
