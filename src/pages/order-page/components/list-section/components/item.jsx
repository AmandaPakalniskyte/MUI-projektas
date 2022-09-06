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
  count,
  setCount,
  price,
  deleteItem,
}) => (
  <>
    <Grid
      justifyContent="space-between"
      alignItems="center"
      p={5}
      sx={(theme) => ({
        display: {
          xl: 'none',
          lg: 'none',
          md: 'none',
          sm: 'flex',
          xs: 'flex',
        },
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'row',
          sm: 'column',
          xs: 'column',
        },
        borderRadius: 1,
        height: {
          xl: '100px',
          lg: '100px',
          md: '100px',
          sm: '300px',
          xs: '300px',
        },
        background: theme.palette.common.white,
        width: {
          xl: '70%',
          lg: '100%',
          md: '100%',
          sm: '100%',
          xs: '100%',
        },

      })}
    >
      <Grid item xs={2} width="100%" display="flex" alignItems="center" justifyContent="space-between">
        <CardMedia
          component="img"
          image={img}
          alt=""
          sx={{
            height: '70px', width: '70px',
          }}
        />
        <Box>{title}</Box>
      </Grid>
      <Grid item xs={2} display="flex" width="100%" alignItems="center" justifyContent="space-between">
        <Box>{`${price} EUR/vnt.`}</Box>
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

      <Grid item xs={2} width="100%" display="flex" alignItems="center" justifyContent="space-between">
        <Box>{`${price * count} EUR`}</Box>
        <Box>

          <IconButton size="large" sx={(theme) => ({ color: theme.palette.primary.main })} onClick={deleteItem}>
            <DeleteIcon />
          </IconButton>

        </Box>
      </Grid>

    </Grid>

    <Grid
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={2}
      pl={2}
      sx={(theme) => ({
        borderRadius: 1,
        height: '100px',
        background: theme.palette.common.white,
        width: {
          xl: '100%',
          lg: '100%',
          md: '100%',
          sm: '50%',
          xs: '100%',
        },
        display: {
          xl: 'flex',
          lg: 'flex',
          md: 'flex',
          sm: 'none',
          xs: 'none',
        },

      })}
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
        <Box>{`${price} EUR/vnt.`}</Box>
      </Grid>
      <Grid item xs={2} width="21%">
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
        <Box>{`${price * count} EUR`}</Box>
      </Grid>
      <Grid item xs={2} width="10%">
        <Box>
          {/* <Button
          size="small"
          variant="contained"
        //   onClick={() => deleteItem(id)}
        > */}
          <IconButton size="large" sx={(theme) => ({ color: theme.palette.primary.main })} onClick={deleteItem}>
            <DeleteIcon />
          </IconButton>
          {/* </Button> */}

        </Box>
      </Grid>
    </Grid>
  </>
);

export default Item;
