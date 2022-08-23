import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  Button,
  Box,
  Typography,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)(() => ({

  ':hover': {
    transform: 'scale(1.2)',
    backgroundColor: 'white',
    color: 'black',
  },

}));

const TotalSection = ({ total }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 3,
      // pr: { xs: 8, md: 8 },
    }}
    >
      <Box sx={{
        display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start',
      }}
      >
        <StyledButton
          width="100%"
          size="large"
          variant="contained"
          onClick={() => navigate('/gallery')}
          sx={(theme) => ({
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.main,
          })}
        >

          <ArrowBackIosIcon />

          Grįžti į galeriją
        </StyledButton>
        {total > 0 && (
        <Box sx={{
          display: 'flex',

        }}
        >

          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h6" sx={(theme) => ({ color: theme.palette.common.white, fontWeight: 'bold' })}>
              Suma:
              {' '}
              {`${total.toFixed(2)} EUR`}
            </Typography>
            <StyledButton
              width="100%"
              size="large"
              variant="contained"
              onClick={() => navigate('/login')}
              sx={(theme) => ({
                backgroundColor: theme.palette.common.white,
                color: theme.palette.primary.main,
              })}
            >

              Pirkti prisijungus
            </StyledButton>
            <StyledButton
              width="100%"
              size="large"
              variant="contained"
              onClick={() => navigate('/register')}
              sx={(theme) => ({
                backgroundColor: theme.palette.common.white,
                color: theme.palette.primary.main,
              })}
            >

              Registruotis ir pirkti
            </StyledButton>
            <StyledButton
              width="100%"
              size="large"
              variant="contained"
              onClick={() => navigate('/contact')}
              sx={(theme) => ({
                backgroundColor: theme.palette.common.white,
                color: theme.palette.primary.main,
              })}
            >

              Pirkti kaip svečiui
            </StyledButton>
          </Box>
        </Box>
        )}

      </Box>

      {/* {total > 0 && (
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      >
        <Typography variant="h6">Iš viso:</Typography>
        <Typography variant="h6">{`${total.toFixed(2)} EUR`}</Typography>
      </Box>
      )} */}
    </Box>
  );
};

export default TotalSection;
