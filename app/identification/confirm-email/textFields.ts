import { TextFieldPropTypes } from '@/features/text-field/typings';

export const textFieldsList: RequiredItemArray<TextFieldPropTypes<'code'>> = [
  {
    type: 'text',
    name: 'code',
    style: 'custom-one',
    placeholder: 'code',
    required: true,
  },
];
