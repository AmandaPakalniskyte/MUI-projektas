import * as React from 'react';
import { Box } from '@mui/material';
import DescriptionSection from './description-section';

const ConceptPage = () => (
  <Box
    py={8}
    height="100%"
    sx={(theme) => ({ background: theme.palette.primary.main })}
  >
    <DescriptionSection />

  </Box>
);

export default ConceptPage;
