import * as React from 'react';
import Box from '@mui/material/Box';
import { DRAWERWIDTH } from '../../shared/utils/constants';
import Form from './Form';

export default function Profile(props) {
  return (
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${DRAWERWIDTH}px)` } }}
      >
        <Form />
      </Box>
  );
}
