import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '../../../../Images/icons/search.svg';
import styles from './searchResult.module.scss';
import {
  createTheme,
  ThemeProvider,
  useMediaQuery,
  withStyles,
} from '@material-ui/core';

export default function Search() {
  const tabView = useMediaQuery('(max-width:1180px)');
  const mobileView = useMediaQuery('(max-width:550px)');
  const mobile = useMediaQuery('(max-width:460px)');
  return (
    <Stack
      spacing={2}
      sx={{ width: tabView ? 290 : 340, height: tabView ? 40 : 50 }}
    >
      <Autocomplete
        freeSolo
        disableClearable
        options={options}
        renderInput={params => (
          <TextField
            {...params}
            placeholder='Search for designers, brands and more'
            InputProps={{
              ...params.InputProps,
              type: 'search',
              endAdornment: (
                <svg
                  width='23'
                  height='24'
                  viewBox='0 0 23 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M22.1338 21.9294L18.048 17.6829C21.3411 13.3807 20.8506 7.13178 16.9308 3.4512C13.011 -0.229392 7.02919 -0.0578858 3.30737 3.8418C-0.41445 7.74148 -0.578134 14.0092 2.93459 18.1163C6.44731 22.2234 12.4112 22.7374 16.5172 19.2869L20.57 23.5333C20.7768 23.7518 21.0583 23.8747 21.3519 23.8747C21.6456 23.8747 21.9271 23.7518 22.1338 23.5333C22.5464 23.0861 22.5464 22.3766 22.1338 21.9294ZM10.339 19.2868C6.08142 19.2868 2.62995 15.6704 2.62995 11.2093C2.62995 6.74828 6.08142 3.13188 10.339 3.13188C14.5966 3.13188 18.0481 6.74828 18.0481 11.2093C18.0481 13.3516 17.2359 15.4062 15.7901 16.921C14.3444 18.4358 12.3836 19.2868 10.339 19.2868Z'
                    fill='#9D9D9D'
                  />
                </svg>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
}

const options = ['Shirt', 'Suit', 'Top', 'Pant'];
