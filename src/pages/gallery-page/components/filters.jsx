import * as React from 'react';
import {
  Box,
  Typography,
  Drawer,
  Divider,
  useMediaQuery,
  Button,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import RangeField from '../../../components/range-field';
import SelectField from '../../../components/select-field';
import CheckboxField from '../../../components/checkbox-field';
import SizeService from '../../../services/size-service';
import ColorService from '../../../services/color-service';
import CategoryService from '../../../services/category-service';

const Filters = ({ drawerWidth }) => {
  const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [sizes, setSizes] = React.useState([]);
  const [colors, setColors] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([2, 25]);
  const [category, setCategory] = React.useState(null);
  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedColors, fetchedSizes] = await Promise.all([
        CategoryService.fetchAll(),
        SizeService.fetchAll(),
        ColorService.fetchAll(),
      ]);
      setCategories(fetchedCategories);
      setSizes(fetchedSizes);
      setColors(fetchedColors);
    })();
  }, []);

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
        <Box sx={(theme) => ({
          width: drawerWidth, mt: 10, p: 2, ...theme.mixins.toolbarOffset,
        })}
        >
          <Typography variant="h4" mb={2}>Filtrai</Typography>
          <RangeField
            label="Kaina"
            value={priceRange}
            onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
            min={0}
            max={200}
          />

          <Divider sx={{ my: 2 }} />

          <SelectField
            options={categories}
            value={category}
            onChange={(_, newCategory) => setCategory(newCategory)}
          />
          <Divider sx={{ my: 2 }} />
          <CheckboxField
            label="Dydžiai"
            options={sizes}
            value={selectedSizes}
            onChange={(_, newSizes) => setSelectedSizes(newSizes)}
          />
          <Divider sx={{ my: 2 }} />

          <CheckboxField
            label="Spalva"
            options={colors}
            value={selectedColors}
            onChange={(_, newColors) => setSelectedColors(newColors)}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Filters;
