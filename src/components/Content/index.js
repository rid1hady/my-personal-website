import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutMe from './AboutMe'
import useStyles from './styles'

function Content(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Switch>
        <Route path='/'>
          <AboutMe />
        </Route>
        <Route path='/about-me'>
          <AboutMe />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
