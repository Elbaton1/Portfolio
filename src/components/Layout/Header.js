import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Info as InfoIcon, SportsKabaddi as BattleIcon, Person as IntroIcon } from '@mui/icons-material';
import '../../styles.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="header-content">
        <nav>
          <Link to="/" className="header-link">
            <IconButton color="inherit" aria-label="home">
              <HomeIcon className="header-icon" />
            </IconButton>
            Home
          </Link>
          <Link to="/about" className="header-link">
            <IconButton color="inherit" aria-label="about">
              <InfoIcon className="header-icon" />
            </IconButton>
            About Death Battle
          </Link>
          <Link to="/intro" className="header-link">
            <IconButton color="inherit" aria-label="intro">
              <IntroIcon className="header-icon" />
            </IconButton>
            About Me
          </Link>
          <Link to="/battle" className="header-link">
            <IconButton color="inherit" aria-label="battle">
              <BattleIcon className="header-icon" />
            </IconButton>
            Death Battle
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


