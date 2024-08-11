import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroVsVillain from './components/HeroVsVillain';
import Home from './components/Home';
import About from './components/About';
import SkillsAndProjects from './components/SkillsAndProjects';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />  {/* Home Page */}
            <Route path="/about" element={<About />} />  {/* About Death Battle */}
            <Route path="/intro" element={<SkillsAndProjects />} />  {/* About Me */}
            <Route path="/battle" element={<HeroVsVillain />} />  {/* Death Battle */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;














