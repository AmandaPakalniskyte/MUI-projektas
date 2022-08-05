import React from 'react';
import {
  Box,
  Grid,
  IconButton,
  Button, OutlinedInput,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
// import ClearIcon from '@mui/icons-material/Clear';

const Item = ({
  img,
  title,
  dimensions,
  count,
  setCount,
  price,
}) => (
  <Grid
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    my={2}
    pl={2}
    sx={(theme) => ({ borderRadius: 1, height: '100px', background: theme.palette.secondary.opaque })}
  >
    <Grid item xs={2} width="16%">
      {/* <Box width="30px" height="30px" src={img} /> */}
      <CardMedia
        component="img"
        image={img}
        alt=""
        sx={{
          height: '70px', width: '70px',
        }}
      />
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>{title}</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>{dimensions}</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box sx={{ display: 'flex', ml: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            p: 0, height: 30, width: 20, minWidth: 0, borderRadius: 0, borderBottomLeftRadius: 4, borderTopLeftRadius: 4, boxShadow: 'none',
          }}
          onClick={() => setCount(count - 1)}
          disabled={count <= 1}
        >
          -
        </Button>
        <OutlinedInput
          variant="contained"
          size="small"
          inputProps={{
            style: {
              padding: 0, width: 30, minWidth: 0, textAlign: 'center',
            },
            value: count,
          }}
          readOnly
          sx={{ borderRadius: 0 }}
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            p: 0, height: 30, width: 20, minWidth: 0, borderRadius: 0, borderBottomRightRadius: 4, borderTopRightRadius: 4, boxShadow: 'none',
          }}
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>{`${price} EUR`}</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>{`${price * count} EUR`}</Box>
    </Grid>
    <Grid item xs={2} width="16%">
      <Box>
        {/* <Button
          size="small"
          variant="contained"
        //   onClick={() => deleteItem(id)}
        > */}
        <IconButton size="large" sx={(theme) => ({ color: theme.palette.primary.main })}>
          <DeleteIcon />
        </IconButton>
        {/* </Button> */}

      </Box>
    </Grid>
  </Grid>
);

export default Item;
