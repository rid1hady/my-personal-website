import React from 'react'
import Container from '@material-ui/core/Container'
import Navbar from './components/Navbar'
import Content from './components/Content'
import useStyles from './styles'

function App() {
  const classes = useStyles()
  return (
    <Container maxWidth={false} className={classes.App} disableGutters>
      <Container maxWidth='md'>
        <Navbar />
        <Content />
      </Container>
    </Container>
  )
}

export default App
