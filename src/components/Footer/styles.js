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
    display: 'inline-block',
    '&::before': {
      content: '""',
      display: 'block',
      borderBottom: `solid 5px ${colors.bondiBlue}`,
      borderRadius: '10px'
    }
  },
  icon: {
    width: '2rem',
    height: '2rem',
    color: colors.bondiBlue
  }
}))

export default styles
