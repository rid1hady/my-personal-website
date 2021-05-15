import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import useStyles from './styles'

function Content() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/about-me' component={AboutMe} />
        <Route exact path='/experiences' component={Experiences} />
        <Route exact path='/blog' component={() => {
               window.location.href = 'https://blog.ridwanhady.com'
               return null
        }} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  )
}

export default Content
