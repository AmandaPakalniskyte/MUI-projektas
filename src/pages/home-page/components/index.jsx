import { Box, styled } from '@mui/material';

export { default as ImageLink } from './img-link';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  zIndex: 1,
  objectFit: 'cover',
  objectPosition: 'left',

});

export const ContentContainer = styled(Box)({
  position: 'relative',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // flexGrow: 1,
});

export const Content = styled(Box)(({ theme }) => ({
  width: '60vw',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
  padding: theme.spacing(6),
  // position: 'relative',

}));
