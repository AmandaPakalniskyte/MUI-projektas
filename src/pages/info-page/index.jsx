import * as React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import InfoContext from '../../contexts/info-context';

const FavouritesPage = () => {
  const { id } = useParams();
  const { infoItems } = React.useContext(InfoContext);
  const [painting, setPainting] = React.useState('');

  return (
    <>
      <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(infoItems, null, 4)}</Box>
      <Box
        onChange={(event) => setPainting(event.target.value)}
        value={painting}
      >
        {id}

      </Box>
    </>
  );
};

export default FavouritesPage;

// import * as React from 'react';
// import {
//   Box,
//   TextField,
//   Paper,
//   Button,
//   FormControl,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Divider,
//   Checkbox,
// } from '@mui/material';

// const deliveryOptions = [
//   { value: 'home', label: 'Į namus' },
//   { value: 'office', label: 'Į mūsų parduotuvę' },
//   { value: 'post', label: 'Į paštomatą' },
// ];

// const InfoPage = () => {
//   const [fullname, setFullname] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [street, setStreet] = React.useState('');
//   const [city, setCity] = React.useState('');
//   const [delivery, setDelivery] = React.useState(null);
//   const [consent, setConsent] = React.useState(true);

//   return (
//     <Box sx={{ pt: 7 }}>
//       <Paper
//         elevation={3}
//         sx={(theme) => ({
//           mt: 4,
//           p: 3,
//           width: 500,
//           mx: 'auto',
//           background: theme.palette.secondary.main,
//         })}

//       >
//         <Box
//           component="form"
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 3,
//           }}
//         >

//           <Divider textAlign="left" sx={{ width: '100%' }}>PIRKĖJO DUOMENYS</Divider>
//           <TextField
//             sx={(theme) => ({ background: theme.palette.secondary.light })}
//             name="fullname"
//             label="Vardas ir pavardė"
//             variant="filled"
//             fullWidth
//             onChange={(event) => setFullname(event.target.value)}
//             value={fullname}
//           />
//           <TextField
//             sx={(theme) => ({ background: theme.palette.secondary.light })}
//             name="email"
//             type="email"
//             label="El. paštas"
//             variant="filled"
//             onChange={(event) => setEmail(event.target.value)}
//             value={email}
//             fullWidth
//           />
//           <Divider textAlign="left" sx={{ width: '100%' }}>ADRESAS</Divider>
//           <TextField
//             sx={(theme) => ({ background: theme.palette.secondary.light })}
//             name="street"
//             label="Gatvė ir namo numeris"
//             variant="filled"
//             onChange={(event) => setStreet(event.target.value)}
//             value={street}
//             fullWidth
//           />
//           <TextField
//             sx={(theme) => ({ background: theme.palette.secondary.light })}
//             name="city"
//             label="Miestas"
//             variant="filled"
//             onChange={(event) => setCity(event.target.value)}
//             value={city}
//             fullWidth
//           />

//           <FormControl sx={{ width: '100%' }}>
//             <Divider textAlign="left" sx={{ width: '100%' }}>PRISTATYMO BŪDAS</Divider>
//             <RadioGroup
//               name="delivery"
//               value={delivery}
//               onChange={(_, newDelivery) => setDelivery(newDelivery)}
//             >
//               {deliveryOptions.map(({ value, label }) => (
//                 <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
//               ))}
//             </RadioGroup>
//           </FormControl>
//           <Box sx={{ alignSelf: 'flex-start' }}>
//             <FormControlLabel
//               control={(
//                 <Checkbox
//                   checked={consent}
//                   onChange={(_, newConsent) => setConsent(newConsent)}
//                 />
//               )}
//               label="Sutinku su asmens duomenų tvarkymo politika"
//             />
//           </Box>
//           <Button type="submit" variant="contained" size="large">Užsakyti</Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default InfoPage;
