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
  Typography,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

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

const initialValues = {
  email: '',
  emailConfirmation: '',
  firstName: '',
  surname: '',
  street: '',
  houseNumber: '',
  postCode: '',
  city: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Privaloma')
    .email('Neteisingas pašto formatas'),
  emailConfirmation: yup.string()
    .required('Privaloma')
    .oneOf([yup.ref('email')], 'El. paštas nesutampa'),
  firstName: yup.string()
    .required('Privaloma')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Tik raidės ir tarpai')
    .min(2, 'Mažiausiai 2 simboliai')
    .max(30, 'Daugiausiai 30 simbolių'),
  surname: yup.string()
    .required('Privaloma')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Tik raidės ir tarpai')
    .min(2, 'Mažiausiai 2 simboliai')
    .max(30, 'Daugiausiai 30 simbolių'),
  street: yup.string()
    .required('Privaloma')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Tik raidės ir tarpai')
    .min(4, 'Mažiausiai 4 simboliai')
    .max(30, 'Daugiausiai 30 simbolių'),
  houseNumber: yup.string()
    .required('Privaloma')
    .min(1, 'Mažiausiai 1 simbolis')
    .max(10, 'Daugiausiai 10 simbolių')
    .matches(/[\d]{1}/, 'Bent vienas skaičius'),
  city: yup.string()
    .required('Privaloma')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Tik raidės ir tarpai')
    .min(4, 'Mažiausiai 4 simboliai')
    .max(30, 'Daugiausiai 30 simbolių'),
  postCode: yup.string()
    .required('Privaloma')
    .matches(/^\d+$/, 'Tik skaičiai')
    .min(4, 'Mažiausiai 4 simboliai')
    .max(8, 'Daugiausiai 8 simboliai'),
});

const ContactPage = () => {
  const [delivery, setDelivery] = React.useState(null);
  const [consent, setConsent] = React.useState(true);
  const [payment, setPayment] = React.useState(null);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const onSubmit = (values) => {
    console.log('įvestos reikšmės');
    console.table(values);
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
          p: 5,
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
          onSubmit={handleSubmit}
          disabled={!dirty || !isValid}
        >
          <Typography component="h1" variant="h4">Pirkėjo duomenys</Typography>

          <TextField
            name="email"
            label="El. paštas"
            type="email"
            variant="filled"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            name="emailConfirmation"
            label="Pakartoti el.paštą"
            type="email"
            variant="filled"
            fullWidth
            value={values.emailConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.emailConfirmation && Boolean(errors.emailConfirmation)}
            helperText={touched.emailConfirmation && errors.emailConfirmation}
          />
          <TextField
            name="firstName"
            label="Vardas"
            type="text"
            variant="filled"
            fullWidth
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            name="surname"
            label="Pavardė"
            type="text"
            variant="filled"
            fullWidth
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
          />
          <Box display="flex" width="100%" gap={3}>
            <TextField
              name="street"
              label="Gatvė"
              type="text"
              variant="filled"
              fullWidth
              value={values.street}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.street && Boolean(errors.street)}
              helperText={touched.street && errors.street}
            />
            <TextField
              name="houseNumber"
              label="Namo ir buto numeris (jei yra)"
              type="text"
              variant="filled"
              fullWidth
              value={values.houseNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.houseNumber && Boolean(errors.houseNumber)}
              helperText={touched.houseNumber && errors.houseNumber}
            />
          </Box>
          <Box display="flex" width="100%" gap={3}>
            <TextField
              name="city"
              label="Miestas"
              type="text"
              variant="filled"
              fullWidth
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
            />
            <TextField
              name="postCode"
              label="Pašto kodas"
              type="text"
              variant="filled"
              fullWidth
              value={values.postCode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.postCode && Boolean(errors.postCode)}
              helperText={touched.postCode && errors.postCode}
            />
          </Box>

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
            disabled={!dirty || !isValid}
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
