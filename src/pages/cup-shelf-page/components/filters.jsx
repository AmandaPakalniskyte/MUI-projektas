import * as React from 'react';
import {
  Box,
  Typography,
  Drawer,
  Divider,
  Slider,
  FormControl,
  useMediaQuery,
  Autocomplete,
  Button,
  TextField,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CheckboxGroup from '../../../components/checkbox-group';

const categories = [
  { id: '1', label: 'Abstraktus' },
  { id: '2', label: 'Gamta' },
  { id: '3', label: 'Portretas' },
  { id: '4', label: 'Klasikinis' },
  { id: '5', label: 'Modernus' },
];

const materialTypes = [
  { id: '1', label: 'Drobė' },
  { id: '2', label: 'Linas' },
  { id: '3', label: 'Popierius' },
];

const colors = [
  { id: '1', label: 'Spalvotas' },
  { id: '2', label: 'Juoda ir balta' },
];

const dimensions = [
  { id: '1', label: '60 x 80' },
  { id: '2', label: '80 x 100' },
  { id: '3', label: '100 x 100' },
  { id: '4', label: '120 x 160' },
];

const Filters = ({ drawerWidth }) => {
  const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([0, 1500]);
  const [category, setCategory] = React.useState(null);
  const [selectedMaterialTypes, setSelectedMaterialTypes] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedDimensions, setSelectedDimensions] = React.useState([]);

  return (
    <>
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          zIndex: 5000,
          height: 64,
          width: 64,
          borderRadius: '50%',
          display: { xxl: 'none' },
        }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <TuneIcon sx={{ color: 'common.white', fontSize: '2rem' }} />
      </Button>

      <Drawer
        anchor="left"
        variant={isExtraLarge ? 'persistent' : 'temporary'}
        open={isExtraLarge || drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={(theme) => ({ width: drawerWidth, p: 2, ...theme.mixins.toolbarOffset })}>
          <Typography variant="h4">Filtrai</Typography>
          <Divider sx={{ my: 2 }} />
          <FormControl sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{}}>Kaina (EUR)</Typography>
            <Box sx={{ mx: 2 }}>
              <Slider
                value={priceRange}
                min={0}
                max={1500}
                // onChangeCommitted={(_, newPriceRange) => setPriceRange(newPriceRange)}
                onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
                valueLabelDisplay="on"
                sx={{ mt: 4 }}
              />
            </Box>
          </FormControl>
          <Divider sx={{ my: 2 }} />

          <Autocomplete
            disablePortal
            options={categories}
            sx={{ width: '100%' }}
            value={category}
            onChange={(_, newCategory) => setCategory(newCategory)}
            renderInput={({
              InputLabelProps,
              InputProps,
              inputProps,
              fullWidth,
              id,
            }) => (
              <TextField
                label="Kategorija"
                InputLabelProps={InputLabelProps}
                InputProps={InputProps}
                fullWidth={fullWidth}
                id={id}
                inputProps={inputProps}
              />
            )}
          />
          <Divider sx={{ my: 2 }} />
          <CheckboxGroup
            label="Pagrindas"
            options={materialTypes}
            value={selectedMaterialTypes}
            onChange={(_, newMaterialTypes) => setSelectedMaterialTypes(newMaterialTypes)}
          />
          <Divider sx={{ my: 2 }} />
          <CheckboxGroup
            label="Spalvų gama"
            options={colors}
            value={selectedColors}
            onChange={(_, newColors) => setSelectedColors(newColors)}
          />
          <Divider sx={{ my: 2 }} />
          <CheckboxGroup
            label="Dimensijos (cm)"
            options={dimensions}
            value={selectedDimensions}
            onChange={(_, newDimensions) => setSelectedDimensions(newDimensions)}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Filters;
