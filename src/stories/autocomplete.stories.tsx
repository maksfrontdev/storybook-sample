import { Story } from '@storybook/react';
import { useState } from 'react';

import Autocomplete from 'components/autocomplete';
import { AutocompleteProps, AutocompleteValue } from 'components/autocomplete';
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

export default {
  title: 'components/autocomplete',
  component: Autocomplete,
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    options: {
      control: 'array',
    },
  },
};

const AutocompleteStory: Story<AutocompleteProps> = (
  args: AutocompleteProps,
) => {
  const [value, setValue] = useState<AutocompleteValue[]>([]);

  return (
    <AutocompleteContainer maxWidth="xs">
      <Autocomplete
        label={args.label}
        options={args.options}
        placeholder={args.placeholder}
        onChange={setValue}
        value={value}
      />
    </AutocompleteContainer>
  );
};

export const MultipleAutocomplete = AutocompleteStory.bind({});

MultipleAutocomplete.args = {
  label: 'Label',
  placeholder: 'Value',
  options: defaultOptions,
};
