import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
import logo from '../../assets/logo.svg'
import IconButton from '@material-ui/core/IconButton'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'

export default function NavBar({ toggleTheme, darkMode }) {
  const classes = useStyles()
  const appBarItems = [
    {
      text: 'About Me',
      ref: `#about-me`
    },
    {
      text: 'Experiences',
      ref: `#experiences`
    },
    {
      text: 'Contact',
      ref: `#contact`
    }
  ]

  const preventDefault = event => event.preventDefault()

  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      className={classes.container}
    >
      <Grid item xs={1}>
        <img src={logo} className={classes.appIcon} alt='app-icon' />
      </Grid>
      <Grid container item xs={6} direction='row' justify='space-between' alignItems='center'>
        {appBarItems.map((item, idx) => (
          <Link href={item.ref} onClick={preventDefault}>
            <Typography key={`appBarItem-${idx}`} className={classes.item}>
              {item.text}
            </Typography>
          </Link>
        ))}
        <IconButton arial-label='darkMode toggler' onClick={toggleTheme} className={classes.darkModeToggle}>
          {darkMode ? <NightsStayIcon /> : <WbSunnyIcon />}
        </IconButton>
      </Grid>
    </Grid>
  )
}
