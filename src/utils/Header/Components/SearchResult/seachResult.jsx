import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '../../../../Images/icons/search.svg';
import styles from './searchResult.module.scss'
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core';



export default function Search() {
  return (
    <Stack spacing={2} sx={{ width: 300, height: 40 }}>

      <Autocomplete
        freeSolo
        disableClearable
        options={options}
        renderInput={(params) => (
            <TextField
              {...params}
              placeholder='&#xf002; Search for designers, brands and more'
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
        )}
      />
    </Stack>

  );
}


const options = [
  'Shirt', 'Suit', 'Top', 'Pant'
];