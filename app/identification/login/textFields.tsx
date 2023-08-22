import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import { TextFieldPropTypes } from '@/features/text-field/typings';

export const textFieldsList: RequiredItemArray<
  TextFieldPropTypes<'username' | 'password'>
> = [
  {
    type: 'text',
    name: 'username',
    style: 'custom-one',
    placeholder: 'your email',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    required: true,
  },
  {
    type: 'password',
    name: 'password',
    style: 'custom-one',
    placeholder: 'password',
    allowedToBeShown: true,
    customShowComponent: {
      isAllowed: <AiOutlineEye className="text-unique-gray-900" size="21px" />,
      isForbidden: (
        <AiOutlineEyeInvisible className="text-unique-gray-900" size="21px" />
      ),
    },
    required: true,
  },
];
