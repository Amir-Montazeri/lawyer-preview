import { atom } from 'recoil';

export const INITIAL_VALUE: UserType = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
};

const userState = atom<UserType>({
  key: 'userState',
  default: INITIAL_VALUE,
});

export default userState;
