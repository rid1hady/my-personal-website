import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
import logo from '../../assets/logo.svg'
import IconButton from '@material-ui/core/IconButton'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function NavBar({ toggleTheme, darkMode }) {
  const classes = useStyles()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const appBarItems = [
    {
      text: 'About Me',
      ref: `/about-me`
    },
    {
      text: 'Experiences',
      ref: `/experiences`
    },
    {
      text: 'Contact',
      ref: `/contact`
    }
  ]

  const renderItems = () => {
    return (
      <>
        {appBarItems.map((item, idx) => (
            <Link to={item.ref}>
              <Typography key={`appBarItem-${idx}`} className={classes.item}>
                {item.text}
              </Typography>
            </Link>
          ))}
          <IconButton
            arial-label='darkMode toggler'
            onClick={toggleTheme}
            className={classes.darkModeToggle}
          >
            {darkMode ? <NightsStayIcon /> : <WbSunnyIcon />}
          </IconButton>
      </>
    )
  }

  const renderDesktop = () => {
    return (
      <Grid
        container
        direction='row'
        justify='space-between'
        className={classes.container}
      >
        <Grid item xs={1}>
          <Link to='/'>
            <img src={logo} className={classes.appIcon} alt='app-icon' />
          </Link>
        </Grid>
        <Grid
          container
          item
          xs={6}
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          {renderItems()}
        </Grid>
      </Grid>
    )
  }

  const renderMobile = () => {
    return (
      <Grid
        container
        direction='row'
        justify='space-around'
        className={classes.mobileContainer}
        alignItems='center'
      >
        {renderItems()}
      </Grid>
    )
  }

  if (isMobile) {
    return renderMobile()
  } else {
    return renderDesktop()
  }
}
