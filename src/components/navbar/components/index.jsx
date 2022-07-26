import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.grey[200],

  '&.active': {
    color: theme.palette.secondary.main,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}));
