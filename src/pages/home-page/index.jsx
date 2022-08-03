import * as React from 'react';
import {
  Box, Typography, Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import * as Home from './components';

const Item = styled(Box)(({ theme }) => ({

  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    cursor: 'pointer',
  },

}));

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>

      <Home.Background
        component="img"
        src="/beige6.jpg"
      />
      <Home.ContentContainer>
        <Home.Content
          component="main"
          sx={(theme) => ({
            width: {
              lg: '60vw',
              md: '70vw',
              sm: '80vw',
              xs: '85vw',
            },
            mt: '15vh',
            mb: 'auto',
            // padding: 5,
            background: theme.palette.secondary.opaque,
            color: theme.palette.primary.main,
            borderRadius: 1,
          })}
        >
          <Typography
            component="h1"
            textAlign="center"
            sx={{
              fontSize: {
                lg: 40,
                sm: 30,

              },

            }}
          >
            PAVEIKSLŲ REPRODUKCIJŲ GALERIJA
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              fontSize: {
                lg: 23,
                md: 15,
                sm: 15,

                xs: 13,

              },
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Harum tempora explicabo nostrum
            accusantium dolor dolores illo minus suscipit aliquam, inventore voluptate consectetur
            omnis labore, laboriosam accusamus! Deserunt mollitia doloribus laboriosam enim ut,
            numquam cumque quisquam tenetur maiores officiis autem necessitatibus magnam voluptate
            ipsa eveniet sequi neque in porro rem facere!
          </Typography>
          <Box>
            <Grid container flexDirection="column" alignItems="center" sx={{ width: '100%', gap: 4 }}>
              <Grid item xs={12} sx={{ textAlign: 'center' }} onClick={() => navigate('/history')}>
                <Item sx={(theme) => ({
                  height: {
                    lg: 120,
                    md: 100,
                    sm: 90,
                    xs: 80,
                  },
                  width: 300,
                  background: theme.palette.secondary.main,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 1,
                })}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontSize: {
                        lg: 25,
                        xs: 15,

                      },
                    }}
                  >
                    KONCEPTAS

                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }} onClick={() => navigate('/gallery')}>
                <Item sx={(theme) => ({
                  height: {
                    lg: 120,
                    md: 100,
                    sm: 90,
                    xs: 80,
                  },
                  width: 300,
                  background: theme.palette.secondary.main,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 1,
                })}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontSize: {
                        lg: 25,
                        xs: 15,

                      },
                    }}
                  >
                    PAVEIKSLŲ GALERIJA

                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Home.Content>
      </Home.ContentContainer>
    </>

  );
};

export default HomePage;
