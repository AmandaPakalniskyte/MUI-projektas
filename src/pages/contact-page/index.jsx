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
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const StyledInsideButton = styled(Button)(() => ({

  ':hover': {
    transform: 'scale(1.2)',
  },

}));

const StyledButton = styled(Button)(() => ({

  ':hover': {
    transform: 'scale(1.2)',
    backgroundColor: 'white',
    color: 'black',
  },

}));

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

const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [delivery, setDelivery] = React.useState(null);
  const [consent, setConsent] = React.useState(true);
  const [payment, setPayment] = React.useState(null);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  return (
    <Box sx={(theme) => ({
      display: 'flex',
      alignItems: 'center',
      flexDirection: {
        xl: 'column',
        lg: 'column',
        md: 'column',
        sm: 'column',
        xs: 'column',
      },
      py: 8,
      px: 10,
      height: '100%',
      background: theme.palette.primary.main,
    })}
    >
      <Box>
        <StyledButton
          width="100%"
          size="large"
          variant="contained"
          onClick={() => navigate('/order')}
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
          })}
        >

          Grįžti į krepželį
        </StyledButton>
      </Box>
      <Paper
        elevation={3}
        sx={(theme) => ({
          mt: 2,
          p: 3,
          // width: 450,
          width: {
            xl: '600px',
            lg: '500px',
            md: '100%',
            sm: '100%',
            xs: '100%',
          },
          mx: 'auto',
          background: theme.palette.common.white,
          color: theme.palette.primary.main,
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

          <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.primary.main })}>PIRKĖJO DUOMENYS</Divider>
          <TextField
            name="email"
            type="email"
            label="El. paštas"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />
          <TextField
            name="password"
            type="password"
            label="Slaptažodis"
            variant="filled"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            fullWidth
          />
          <TextField
            name="passwordConfirmation"
            type="passwordConfirmation"
            label="Pakartokite slaptažodį"
            variant="filled"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            value={passwordConfirmation}
            fullWidth
          />
          <TextField
            name="name"
            label="Vardas"
            variant="filled"
            fullWidth
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <TextField
            name="surname"
            label="Pavardė"
            variant="filled"
            fullWidth
            onChange={(event) => setSurname(event.target.value)}
            value={surname}
          />
          <DesktopDatePicker
            inputFormat="yyyy/MM/dd"
            renderInput={(params) => (
              <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                name="birthday"
                label="Gimimo data"
                variant="filled"
                fullWidth
                onChange={(event) => setBirthday(event.target.value)}
                value={birthday}
              />
            )}
          />
          <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.primary.main })}>ADRESAS</Divider>
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
            <Divider textAlign="left" sx={(theme) => ({ width: '100%', color: theme.palette.primary.main })}>PRISTATYMO BŪDAS</Divider>
            <RadioGroup
              name="delivery"
              value={delivery}
              onChange={(_, newDelivery) => setDelivery(newDelivery)}
              // onClick={() => setShow((prev) => !prev)}
            >
              {deliveryOptions.map(({ value, label }) => (
                <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
              ))}
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <Divider textAlign="left" sx={() => ({ width: '100%' })}>MOKĖJIMO BŪDAS</Divider>
            <RadioGroup
              sx={(theme) => ({ color: theme.palette.primary.main })}
              name="payment"
              value={payment}
              onChange={(_, newPayment) => { setPayment(newPayment); setShow((prev) => !prev); }}
            >
              {show && <Box>This is your component</Box>}
              {paymentOptions.map(({ value, label }) => (
                <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
              ))}
            </RadioGroup>
          </FormControl>
          <Box sx={{ alignSelf: 'flex-start' }}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={consent}
                  onChange={(_, newConsent) => setConsent(newConsent)}
                />
              )}
              label="Sutinku su asmens duomenų tvarkymo politika"
            />
          </Box>
          <StyledInsideButton
            type="submit"
            variant="contained"
            size="large"
            sx={(theme) => ({
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
          >
            Pateikti užsakymą

          </StyledInsideButton>
        </Box>
      </Paper>

    </Box>
  );
};

export default ContactPage;
