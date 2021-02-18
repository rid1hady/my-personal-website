import makeStyles from '@material-ui/styles/makeStyles'
import colors from './colors'

const styles = makeStyles({
  App: {
    display: 'flex',
    flexDirection: 'column',
    background: colors.gallery,
    minHeight: '100vh',
    width: '100vw',
    border: '0.75rem solid',
    borderColor: colors.bondiBlue
  }
})

export default styles