import { TextFieldPropTypes } from '@/features/text-field/typings';

export const textFieldsList: RequiredItemArray<TextFieldPropTypes<'username'>> =
  [
    {
      type: 'text',
      name: 'username',
      style: 'custom-one',
      placeholder: 'your email',
      required: true,
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    },
  ];
