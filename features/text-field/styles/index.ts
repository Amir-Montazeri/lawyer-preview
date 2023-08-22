import { AvailableStyles, TextFieldTypes } from '../typings';

type AvailableStylesListType = {
  [K1 in AvailableStyles]: string;
};

type SpecificTypeStylesType = {
  [K2 in TextFieldTypes]: Partial<AvailableStylesListType>;
};

export const styles = (style: AvailableStyles, type: TextFieldTypes) => {
  const availableStyles: AvailableStylesListType = {
      'custom-one':
        'mb-3 w-full py-2 px-3 rounded-lg bg-unique-gold-900 text-black placeholder-gray-600 field-outline',
      'custom-two': 'bg-blue-600',
    },
    specificTypeStyles: SpecificTypeStylesType = {
      text: {
        'custom-one': '',
      },
      number: {
        'custom-one': 'text-white',
      },
      password: {
        'custom-one': '',
      },
    };

  return availableStyles[style] + ' ' + (specificTypeStyles[type][style] || '');
};
