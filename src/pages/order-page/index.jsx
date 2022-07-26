import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Checkbox,
} from '@mui/material';

const deliveryOptions = [
  { value: 'home', label: 'Į namus' },
  { value: 'office', label: 'Į mūsų parduotuvę' },
  { value: 'post', label: 'Į paštomatą' },
];

const OrderPage = () => {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [delivery, setDelivery] = React.useState(null);
  const [subscribtion, setSubscribe] = React.useState(true);

  return (
    <Box sx={{ pt: 7 }}>
      <Paper
        elevation={3}
        sx={(theme) => ({
          mt: 4,
          p: 3,
          width: 500,
          mx: 'auto',
          background: theme.palette.secondary.main,
        })}

      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >

          <Divider textAlign="left" sx={{ width: '100%' }}>Pirkėjo duomenys</Divider>
          <TextField
            name="fullname"
            label="Vardas ir pavardė"
            variant="filled"
            fullWidth
            onChange={(event) => setFullname(event.target.value)}
            value={fullname}
          />
          <TextField
            name="email"
            type="email"
            label="El. paštas"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />
          <Divider textAlign="left" sx={{ width: '100%' }}>Adresas</Divider>
          <TextField
            name="street"
            label="Gatvė ir namo numeris"
            variant="filled"
            onChange={(event) => setStreet(event.target.value)}
            value={street}
            fullWidth
          />
          <TextField
            name="city"
            label="Miestas"
            variant="filled"
            onChange={(event) => setCity(event.target.value)}
            value={city}
            fullWidth
          />

          <FormControl sx={{ width: '100%' }}>
            <FormLabel>Pristatymo būdas</FormLabel>
            <RadioGroup
              name="delivery"
              value={delivery}
              onChange={(_, newDelivery) => setDelivery(newDelivery)}
            >
              {deliveryOptions.map(({ value, label }) => (
                <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
              ))}
            </RadioGroup>
          </FormControl>
          <Box sx={{ alignSelf: 'flex-start' }}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={subscribtion}
                  onChange={(_, newSubsribtion) => setSubscribe(newSubsribtion)}
                />
              )}
              label="Sutinku su asmens duomenų tvarkymo politika"
            />
          </Box>
          <Button type="submit" variant="contained" size="large">Užsakyti</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderPage;
