import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
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
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 484.000000 484.000000'
              preserveAspectRatio='xMidYMid meet'
              className={classes.appIcon}
            >
              <g
                transform='translate(0.000000,484.000000) scale(0.100000,-0.100000)'
                fill={darkMode ? '#eeeeee' : '#222831'}
                stroke='none'
              >
                <path
                  d='M584 4825 c-143 -31 -265 -98 -368 -201 -76 -75 -123 -147 -163 -244
  -56 -139 -54 -50 -51 -1983 l3 -1782 24 -70 c85 -253 253 -419 501 -497 l75
  -23 1805 0 1805 0 75 23 c251 79 422 250 502 502 l23 75 0 1805 0 1805 -23 75
  c-78 248 -244 416 -497 501 l-70 24 -1790 2 c-1466 1 -1801 -1 -1851 -12z
  m826 -1195 l0 -200 400 0 400 0 0 -400 0 -400 -400 0 -400 0 0 -800 0 -800
  -400 0 -400 0 0 1400 0 1400 400 0 400 0 0 -200z m2800 -1210 l0 -1390 -400 0
  -400 0 0 800 0 800 -400 0 -400 0 0 400 0 400 400 0 400 0 0 190 0 190 400 0
  400 0 0 -1390z'
                />
              </g>
            </svg>
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
