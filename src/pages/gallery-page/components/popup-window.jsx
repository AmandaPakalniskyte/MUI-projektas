import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PopupWindow = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [paintings, setPaintings] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('http://localhost:8000/paintings')
  //     .then((res) => res.json())
  //     .then((fetchedPaintings) => setPaintings(fetchedPaintings));
  // }, []);

  return (
    <div>

      <IconButton
        sx={(theme) => ({ color: theme.palette.primary.main })}
        onClick={handleOpen}
      >
        <InfoIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            lala
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            {/* <Box sx={{ height: '100', width: '100', backgroundColor: 'blue' }}>
              {paintings.map(({
                id,
                title,
                description,
                img,
                category,
                price,
                dimensions,
              }) => (
                <Box key={id}>
                  <Box
                    id={id}
                    title={title}
                    description={description}
                    img={img}
                    category={category}
                    price={price}
                    dimensions={dimensions}
                  />
                </Box>
              ))}
            </Box> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PopupWindow;
