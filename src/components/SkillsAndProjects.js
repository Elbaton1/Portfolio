import React from 'react';
import { Container, Box, Typography, Paper, Link, Grid, IconButton, Button } from '@mui/material';
import { GitHub, LinkedIn, Language, GetApp } from '@mui/icons-material';
import '../styles.css';

const SkillsAndProjects = () => {
  return (
    <Container maxWidth="md" className="skills-projects-container">
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" className="skills-title" gutterBottom>
          My Skills & Projects
        </Typography>
      </Box>
      
      <Paper className="skills-box" elevation={3}>
        <Typography variant="h4" className="skills-section-title">Technical Skills</Typography>
        <Typography variant="body1" className="skills-text" paragraph>
          I’m proficient in Python, HTML, CSS, React, and have some experience with JavaScript and UX/UI design. I’m constantly pushing myself to improve and learn new technologies, and I find joy in every step of the process.
        </Typography>
      </Paper>
      
      <Paper className="projects-box" elevation={3}>
        <Typography variant="h4" className="projects-section-title">Highlighted Project: Death Battle AI</Typography>
        <Typography variant="body1" className="projects-text" paragraph>
          One of my notable projects is the Death Battle AI, a platform that allows users to simulate battles between their favorite superheroes, villains, and sci-fi characters. This project showcases my skills in web development, API integration, and creating interactive user experiences.
        </Typography>
      </Paper>

      <Paper className="projects-box" elevation={3}>
        <Typography variant="h4" className="projects-section-title">Other Projects</Typography>
        <Typography variant="body1" className="projects-text" paragraph>
          Here are some of my other projects that are live on GitHub Pages:
        </Typography>
        <ul className="projects-list">
          <li>
            <Link href="https://elbaton1.github.io/my-react-app/" target="_blank" rel="noopener">
              AI-powered Patent Due Diligence System
            </Link>
          </li>
          <li>
            <Link href="https://elbaton1.github.io/CareerQuest/" target="_blank" rel="noopener">
              CareerQuest Job Listings App
            </Link>
          </li>
          
        </ul>
      </Paper>

      <Paper className="goals-box" elevation={3}>
        <Typography variant="h4" className="goals-section-title">Career Goals</Typography>
        <Typography variant="body1" className="goals-text" paragraph>
          My career goals include becoming a web designer, game designer, or cybersecurity professional, or perhaps starting my own company. I’m committed to lifelong learning and will never give up on getting better.
        </Typography>
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" className="contact-section-title" gutterBottom>
          Let's Connect
        </Typography>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <IconButton color="primary" href="https://www.linkedin.com/in/michael-o-brien-27ba202a9" target="_blank" rel="noopener">
              <LinkedIn sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1" gutterBottom>LinkedIn</Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" href="https://github.com/Elbaton1" target="_blank" rel="noopener">
              <GitHub sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1" gutterBottom>GitHub</Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" href="" target="_blank" rel="noopener">
              <Language sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body1" gutterBottom>My Website</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GetApp />}
          href="/Michael_Obrien_Resume.pdf"

          download="Michael_Obrien_Resume.pdf"
          className="download-resume-button"
        >
          Download Resume
        </Button>
      </Box>
    </Container>
  );
}

export default SkillsAndProjects;


