import React from 'react';
import {
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const Item = ({
  img,
  title,
  dimensions,
  //   count,
  price,
}) => (
  <Grid
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    my={2}
    pl={4}
    sx={(theme) => ({ borderRadius: 1, height: '100px', background: theme.palette.secondary.opaque })}
  >
    <Grid item xs={2} width="16%" height="20px">
      <Box width="30px" height="30px" src={img} />
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>{title}</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>{dimensions}</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>quantity</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>{price}</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>
        <IconButton size="large">
          <ClearIcon fontSize="large" />
        </IconButton>

      </Box>
    </Grid>
  </Grid>
);

export default Item;
