import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Button,
  FormControl,
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

const paymentOptions = [
  { value: 'card', label: 'Banko kortele' },
  { value: 'transfer', label: 'Mokėjimo pavedimu' },
  { value: 'paypal', label: 'PayPal' },
];

const OrderPage = () => {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [delivery, setDelivery] = React.useState(null);
  const [consent, setConsent] = React.useState(true);
  const [payment, setPayment] = React.useState(null);

  return (
    <Box sx={{ pt: 7, display: 'flex' }}>
      <Paper
        elevation={3}
        sx={(theme) => ({
          mt: 4,
          p: 3,
          width: 500,
          mx: 'auto',
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
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

          <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.secondary.main })}>PIRKĖJO DUOMENYS</Divider>
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="fullname"
            label="Vardas ir pavardė"
            variant="filled"
            fullWidth
            onChange={(event) => setFullname(event.target.value)}
            value={fullname}
          />
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="email"
            type="email"
            label="El. paštas"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />
          <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.secondary.main })}>ADRESAS</Divider>
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="street"
            label="Gatvė ir namo numeris"
            variant="filled"
            onChange={(event) => setStreet(event.target.value)}
            value={street}
            fullWidth
          />
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="city"
            label="Miestas"
            variant="filled"
            onChange={(event) => setCity(event.target.value)}
            value={city}
            fullWidth
          />

          <FormControl sx={{ width: '100%' }}>
            <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.secondary.main })}>PRISTATYMO BŪDAS</Divider>
            <RadioGroup
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
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
                  sx={(theme) => ({ color: theme.palette.primary.contrastText })}
                  checked={consent}
                  onChange={(_, newConsent) => setConsent(newConsent)}
                />
              )}
              label="Sutinku su asmens duomenų tvarkymo politika"
            />
          </Box>
          <Button type="submit" variant="contained" size="large" sx={(theme) => ({ background: theme.palette.secondary.main })}>Užsakyti</Button>
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={(theme) => ({
          mt: 4,
          p: 3,
          width: 500,
          mx: 'auto',
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
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

          <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.secondary.main })}>MOKĖJIMO DUOMENYS</Divider>
          <FormControl sx={{ width: '100%' }}>
            <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.secondary.main })}>Mokėjimo būdas</Divider>
            <RadioGroup
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
              name="payment"
              value={payment}
              onChange={(_, newPayment) => setPayment(newPayment)}
            >
              {paymentOptions.map(({ value, label }) => (
                <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
              ))}
            </RadioGroup>
          </FormControl>
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="fullname"
            label="Vardas ir pavardė"
            variant="filled"
            fullWidth
            onChange={(event) => setFullname(event.target.value)}
            value={fullname}
          />
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="email"
            type="email"
            label="El. paštas"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />
          <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.secondary.main })}>ADRESAS</Divider>
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="street"
            label="Gatvė ir namo numeris"
            variant="filled"
            onChange={(event) => setStreet(event.target.value)}
            value={street}
            fullWidth
          />
          <TextField
            sx={(theme) => ({ background: theme.palette.common.white })}
            name="city"
            label="Miestas"
            variant="filled"
            onChange={(event) => setCity(event.target.value)}
            value={city}
            fullWidth
          />

          <FormControl sx={{ width: '100%' }}>
            <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.secondary.main })}>PRISTATYMO BŪDAS</Divider>
            <RadioGroup
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
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
                  sx={(theme) => ({ color: theme.palette.primary.contrastText })}
                  checked={consent}
                  onChange={(_, newConsent) => setConsent(newConsent)}
                />
              )}
              label="Sutinku su asmens duomenų tvarkymo politika"
            />
          </Box>
          <Button type="submit" variant="contained" size="large" sx={(theme) => ({ background: theme.palette.secondary.main })}>Užsakyti</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderPage;
