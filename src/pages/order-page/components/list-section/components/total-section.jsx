import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  Button,
  Box,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        <Button
          width="100%"
          size="large"
          variant="contained"
          onClick={() => navigate('/gallery')}
          sx={(theme) => ({ color: theme.palette.primary.contrastText })}
        >

          <ArrowBackIosIcon />

          Grįžti į galeriją
        </Button>
        {total > 0 && (
        <Box sx={{
          display: 'flex',

        }}
        >

          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Suma:
              {' '}
              {`${total.toFixed(2)} EUR`}
            </Typography>
            <Button
              width="100%"
              size="large"
              variant="contained"
              onClick={() => navigate('/contact')}
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
            >

              Pirkti kaip svečiui
            </Button>
            <Button
              width="100%"
              size="large"
              variant="contained"
              onClick={() => navigate('/login')}
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
            >

              Pirkti prisijungus
            </Button>
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
