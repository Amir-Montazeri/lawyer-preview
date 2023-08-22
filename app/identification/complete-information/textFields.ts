import { TextFieldPropTypes } from '@/features/text-field/typings';

export const textFieldsList: RequiredItemArray<
  TextFieldPropTypes<'phone_number' | 'first_name' | 'last_name'>
> = [
  {
    type: 'text',
    name: 'first_name',
    style: 'custom-one',
    placeholder: 'first name*',
    required: true,
  },
  {
    type: 'text',
    name: 'last_name',
    style: 'custom-one',
    placeholder: 'last name*',
    required: true,
  },
  {
    type: 'text',
    name: 'phone_number',
    style: 'custom-one',
    placeholder: 'phone number*',
    pattern:
      '(0)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}',
    required: true,
  },
];
