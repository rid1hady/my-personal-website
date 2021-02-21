import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Switch from '@material-ui/core/Switch'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './components/Navbar'
import Content from './components/Content'
import useStyles, { lightTheme, darkTheme } from './styles'
import { ThemeProvider } from '@material-ui/core/styles'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const classes = useStyles()
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth={false} className={classes.App} disableGutters>
        <Container maxWidth='md'>
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode}/>
          <Content />
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
