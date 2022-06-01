import { ThemeProvider } from '@mui/material';
import { useState } from 'react';

import theme from '../src/theme';

import Autocomplete, { AutocompleteValue } from 'components/autocomplete';
import AutocompleteContainer from 'components/autocomplete/autocomplete-container';

const defaultOptions = [
  { value: 'Menu item 1' },
  { value: 'Menu item 2' },
  { value: 'Menu item 3' },
  { value: 'Menu item 4' },
  { value: 'Menu item 5' },
  { value: 'Menu item 6' },
  { value: 'Menu item 7' },
  { value: 'Menu item 8' },
  { value: 'Menu item 9' },
  { value: 'Menu item 10' },
  { value: 'Menu item 11' },
  { value: 'Menu item 12' },
  { value: 'Menu item 13' },
  { value: 'Menu item 14' },
  { value: 'Menu item 15' },
  { value: 'Menu item 16' },
  { value: 'Menu item 17' },
  { value: 'Menu item 18' },
  { value: 'Menu item 19' },
  { value: 'Menu item 20' },
  { value: 'Menu item 21' },
];

const App = () => {
  const [value, setValue] = useState<AutocompleteValue[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <AutocompleteContainer maxWidth="xs">
        <Autocomplete
          label="Label"
          placeholder="Value"
          options={defaultOptions}
          onChange={setValue}
          value={value}
        />
      </AutocompleteContainer>
    </ThemeProvider>
  );
};

export default App;
