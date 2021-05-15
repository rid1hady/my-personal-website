import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useDarkMode from './lib/useDarkMode'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import useStyles, { lightTheme, darkTheme } from './styles'
import { ThemeProvider } from '@material-ui/core/styles'

function App() {
  const [theme, toggleTheme] = useDarkMode()
  const classes = useStyles()
  const isDarkMode = theme === 'dark'
  const themeMode = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Container maxWidth={false} className={classes.App} disableGutters>
        <Container maxWidth='md'>
          <BrowserRouter>
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Content />
            <Footer />
          </BrowserRouter>
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
