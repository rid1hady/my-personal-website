import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../../colors'

const styles = makeStyles(theme => ({
  greeting: {
    marginBottom: '2rem'
  },
  title: {
    fontFamily: 'Raleway',
    fontSize: '3rem',
    fontWeight: 800,
    color: colors.ebonyClay
  },
  normalText: {
    fontFamily: 'Raleway',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: colors.brightGray
  },
  subtitle: {
    fontFamily: 'Raleway',
    fontSize: '2rem',
    fontWeight: 600,
    color: colors.ebonyClay
  }
}))

export default styles
