import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img1 from '../../../Asset/image/mock.svg'
import img2 from '../../../Asset/image/prep.svg'
import img3 from '../../../Asset/image/teach.svg'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const Cards=()=> {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Products
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              
Our AI mock interview product provides lifelike interview practice with personalized feedback, enhancing your skills and increasing job interview success.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Know More</Button>
              <Button variant="outlined">Help To Improve</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          
             
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={img2}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Teach and Train
                    </Typography>
                    <Typography>
                    Superpower for improving communication
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small">Explore</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={img1}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    In-Prep
                    </Typography>
                    <Typography>
                    Ace any interview through real time experience
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Explore</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={img3}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Mock (TOEFL/IELTS)
                    </Typography>
                    <Typography>
                    Increase your chances for foreign education
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Explore</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            
          </Grid>
        </Container>
      </main>
     
      {/* End footer */}
    </ThemeProvider>
  );
}