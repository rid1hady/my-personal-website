import makeStyles from '@material-ui/core/styles/makeStyles'
import colors from '../../../colors'

const styles = makeStyles(theme => ({
  title: {
    fontFamily: 'Raleway',
    fontSize: '2.5em',
    fontWeight: 800,
    color: colors.ebonyClay
  },
  normalText: {
    fontFamily: 'Raleway',
    fontSize: '1.2em',
    fontWeight: 500,
    color: colors.brightGray
  },
  subtitle: {
    fontFamily: 'Raleway',
    fontSize: '2em',
    fontWeight: 600,
    color: colors.ebonyClay
  }
}))

export default styles
