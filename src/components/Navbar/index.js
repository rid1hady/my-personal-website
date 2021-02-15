import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import SvgIcon from '@material-ui/core/SvgIcon'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import useStyles from './styles'
import logo from '../../logo.svg'

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.scrollToTopContainer}>
        {children}
      </div>
    </Zoom>
  )
}

export default function NavBar(props) {
  const classes = useStyles()
  const appBarItems = [
    {
      text: 'About Me'
    },
    {
      text: 'Experiences'
    },
    {
      text: 'Education'
    },
    {
      text: 'Contact'
    }
  ]
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Container maxWidth='md'>
            <Grid container direction='row' justify='space-between'>
              <Grid
                container
                item
                xs={6}
                direction='row'
                justify='space-between'
              >
                {appBarItems.map((item, idx) => (
                  <Typography
                    key={`appBarItem-${idx}`}
                    className={classes.appBarItem}
                  >
                    {item.text}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={1}>
                <img src={logo} className={classes.appIcon} alt='app-icon' />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
      <ScrollTop {...props}>
        <Fab
          size='small'
          aria-label='scroll back to top'
          className={classes.scrollToTopIcon}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}
