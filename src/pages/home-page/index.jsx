import * as React from 'react';
import {
  Box, Typography, Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import * as Home from './components';

const Item = styled(Box)(({ theme }) => ({

  ':hover': {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
    cursor: 'pointer',
  },

}));

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: '100vh', position: 'relative' }}>
      <Home.Background component="img" src="/main.jpg" />
      <Home.ContentContainer>
        <Home.Content component="main" sx={(theme) => ({ letterSpacing: '0.08em', color: theme.palette.primary.main })}>
          <Typography
            component="h1"
            variant="h2"
          >
            VIRTUALI GALERIJA
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Harum tempora explicabo nostrum
            accusantium dolor dolores illo minus suscipit aliquam, inventore voluptate consectetur
            omnis labore, laboriosam accusamus! Deserunt mollitia doloribus laboriosam enim ut,
            numquam cumque quisquam tenetur maiores officiis autem necessitatibus magnam voluptate
            ipsa eveniet sequi neque in porro rem facere!
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container flexDirection="column" alignItems="center" sx={{ width: '100%', gap: 3 }}>
              <Grid item xs={12} sx={{ textAlign: 'center' }} onClick={() => navigate('/history')}>
                <Item sx={(theme) => ({
                  height: 150, width: 300, background: theme.palette.secondary.main, display: 'flex', justifyContent: 'center', alignItems: 'center',
                })}
                >
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>MŪSŲ ISTORIJA</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }} onClick={() => navigate('/gallery')}>
                <Item sx={(theme) => ({
                  height: 150, width: 300, background: theme.palette.secondary.main, display: 'flex', justifyContent: 'center', alignItems: 'center',
                })}
                >
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>PAVEIKLSŲ GALERIJA</Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Home.Content>
      </Home.ContentContainer>
    </Box>
  );
};

export default HomePage;
