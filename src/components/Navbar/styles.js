import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../colors'

const styles = makeStyles(theme => ({
  container: {
    marginTop: '3rem'
  },
  item: {
    fontFamily: 'Raleway',
    borderBottom: '1px solid transparent',
    fontWeight: '600',
    fontSize: '1.25rem',
    color: colors.ebonyClay,
    display: 'inline-block',
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
  },
  appIcon: {
    width: '3rem',
    height: '3rem'
  }
}))

export default styles
