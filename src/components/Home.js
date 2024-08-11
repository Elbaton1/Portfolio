import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Info, Star, Whatshot } from '@mui/icons-material';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import '../styles.css';

const funFacts = [
  "Did you know that Batman's Batsuit is equipped with sonar vision, allowing him to see in complete darkness?",
  "Spider-Man's web-shooters were originally invented by Peter Parker in his high school chemistry lab.",
  "Thor's hammer, Mjolnir, is made from the mystical metal Uru, which can only be found in the heart of a dying star.",
  "Wonder Woman's invisible jet was created using Amazonian technology, making it undetectable by radar.",
  "The Flash once ran so fast that he broke through the fabric of reality and entered the Speed Force.",
  "Wolverine's adamantium claws can cut through almost any material, including steel and concrete.",
  "Iron Man's suit is powered by the Arc Reactor, a clean energy source that Tony Stark developed to save his life.",
  "Doctor Strange's Sanctum Sanctorum is located in Greenwich Village, New York City, and is a nexus of mystical energies.",
  "Superman's Fortress of Solitude is an ancient Kryptonian outpost hidden in the Arctic, containing vast knowledge and technology.",
  "Aquaman can communicate telepathically with all marine life, from the smallest fish to the largest whales.",
  "The Hulk's strength increases proportionally with his level of anger, making him one of the strongest beings in the universe.",
  "Black Panther's suit is made of vibranium, the same material as Captain America's shield, making it nearly indestructible.",
  "Deadpool is known for his ability to heal from almost any wound, and his tendency to break the fourth wall and talk to the audience."
];

const Home = () => {
  return (
    <Container maxWidth="lg" className="container moving-background">

      {/* Enhanced Introduction Section */}
      <Paper elevation={4} className="intro-box">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" className="intro-title" gutterBottom>
            Hi, I'm Michael O'Brien
          </Typography>
          <Typography variant="h6" className="intro-subtitle" gutterBottom>
            Aspiring Software Developer & Web Designer
          </Typography>
          <Typography variant="body1" className="intro-text" paragraph>
            Welcome to my portfolio website! This platform not only showcases my "Death Battle AI" project, a passion project where fans can simulate epic battles between their favorite superheroes and villains, but it also highlights my skills and personal projects in software development and web design.
          </Typography>
          <Typography variant="body1" className="intro-text" paragraph>
            "Death Battle AI" is a unique combination of my love for technology and superheroes. Using AI and advanced algorithms, the system analyzes characters' abilities to determine the outcome of these legendary showdowns. However, this site is more than just "Death Battle AI"—it's a reflection of who I am as a developer and designer.
          </Typography>
          <Typography variant="body1" className="intro-text" paragraph>
            I've been immersed in software development for two semesters, and I am continually honing my skills to create impactful and engaging digital experiences. In addition to my technical expertise in Python, HTML, CSS, React, and JavaScript, I bring creativity and passion to every project I undertake.
          </Typography>
          <Typography variant="body1" className="intro-text" paragraph>
            This website is a living portfolio that showcases not only my technical abilities but also my dedication to creating meaningful and enjoyable user experiences. Whether you're here to explore "Death Battle AI" or to learn more about my work, I hope you find something that resonates with you.
          </Typography>
          <Typography variant="body1" className="intro-text" paragraph>
            My long-term goals include becoming a web designer, game designer, or cybersecurity professional, with the ultimate dream of starting my own company. Thank you for visiting my portfolio, and I hope you enjoy discovering my work.
          </Typography>
        </Box>
      </Paper>

      {/* Existing Home Page Content */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" className="title" gutterBottom>
          Welcome to DEATH BATTLE AI
        </Typography>
        <Typography variant="h6" className="subtitle" gutterBottom>
          Discover epic battles between your favorite heroes and villains, soon to be powered by AI!
        </Typography>
        <Button variant="contained" component={Link} to="/battle" className="button">
          Start a Battle
        </Button>
      </Box>

      {/* Featured Fights Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" className="card-title">Featured Fights</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardMedia
                component="img"
                height="200"
                image={image1}
                alt="Featured Fight 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardMedia
                component="img"
                height="200"
                image={image2}
                alt="Featured Fight 2"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardMedia
                component="img"
                height="200"
                image={image3}
                alt="Featured Fight 3"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Fun Facts Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" className="card-title">Fun Facts</Typography>
        <Grid container spacing={3}>
          {funFacts.map((fact, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="card">
                <CardContent className="card-content">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Info sx={{ marginRight: 1, color: '#FFEB3B' }} />
                    <Typography variant="body1" className="card-text">
                      {fact}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Hero Spotlight Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" className="card-title">Hero Spotlight</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardContent className="card-content">
                <Star sx={{ marginRight: 1, color: '#FFD700' }} />
                <Typography variant="h6">Spider-Man</Typography>
                <Typography variant="body2">
                  Spider-Man is one of the most popular and commercially successful superheroes. He has superhuman strength, speed, reflexes, and the ability to cling to most surfaces.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardContent className="card-content">
                <Star sx={{ marginRight: 1, color: '#FFD700' }} />
                <Typography variant="h6">Batman</Typography>
                <Typography variant="body2">
                  Batman, also known as the Dark Knight, is one of the most iconic superheroes. He is a master detective, martial artist, and has an arsenal of high-tech gadgets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardContent className="card-content">
                <Star sx={{ marginRight: 1, color: '#FFD700' }} />
                <Typography variant="h6">Wonder Woman</Typography>
                <Typography variant="body2">
                  Wonder Woman, an Amazonian princess, possesses superhuman strength, speed, and agility. She wields the Lasso of Truth, indestructible bracelets, and a variety of weapons.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Recent News Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" className="card-title">Recent News</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className="card">
              <CardContent className="card-content">
                <Whatshot sx={{ marginRight: 1, color: '#FF4500' }} />
                <Typography variant="h6">New Avengers Movie Announced</Typography>
                <Typography variant="body2">
                  Marvel Studios has announced a new Avengers movie set to release next year. The movie promises to bring together the biggest heroes in the Marvel universe for an epic showdown.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="card">
              <CardContent className="card-content">
                <Whatshot sx={{ marginRight: 1, color: '#FF4500' }} />
                <Typography variant="h6">Batman Arkham Series</Typography>
                <Typography variant="body2">
                  A new installment in the Batman Arkham series has been confirmed by Warner Bros. Interactive Entertainment. Fans can expect new villains and a darker storyline.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="card">
              <CardContent className="card-content">
                <Whatshot sx={{ marginRight: 1, color: '#FF4500' }} />
                <Typography variant="h6">Tony Stark Reveals New Iron Man Suit</Typography>
                <Typography variant="body2">
                  In a surprising announcement, Tony Stark has unveiled the latest version of his Iron Man suit, featuring advanced AI capabilities and new weapon systems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="card">
              <CardContent className="card-content">
                <Whatshot sx={{ marginRight: 1, color: '#FF4500' }} />
                <Typography variant="h6">Gotham City Introduces New Vigilante</Typography>
                <Typography variant="body2">
                  Reports from Gotham City indicate the emergence of a new vigilante. Details are scarce, but witnesses claim the figure operates in the shadows, much like Batman.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

    </Container>
  );
};

export default Home;








