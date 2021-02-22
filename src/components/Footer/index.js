import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import useStyles from './styles'

function Footer() {
  const classes = useStyles()
  const footerIcons = [
    {
      icon: EmailIcon,
      href: 'mailto:ridwanharifin@gmail.com'
    },
    {
      icon: LinkedInIcon,
      href: 'https://www.linkedin.com/in/ridwanhady/'
    },
    {
      icon: GitHubIcon,
      href: 'https://github.com/rid1hady'
    },
    {
      icon: InstagramIcon,
      href: 'https://instagram.com/rid1hady'
    }
  ]
  return (
    <Grid container direction='column' className={classes.footerContainer}>
      <Grid item xs>
        <Typography variant='subtitle1' className={classes.text}>
          {`Let's Connect!`}
        </Typography>
      </Grid>
      <Grid item container xs direction='row'>
        {footerIcons.map(item => {
          const Icon = item.icon
          return (
            <IconButton href={item.href} target='_blank' edge='start'>
              <Icon className={classes.icon} />
            </IconButton>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Footer
