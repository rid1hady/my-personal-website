import React from 'react'
import AboutMe from './AboutMe'
import useStyles from './styles'

function Content(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <AboutMe />
    </div>
  )
}

export default Content
