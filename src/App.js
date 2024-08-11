import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
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
      {/* No Router here since it's wrapped in index.js */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/intro" element={<SkillsAndProjects />} />
          <Route path="/battle" element={<HeroVsVillain />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;














