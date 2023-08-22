import { atom } from 'recoil';

const alertState = atom<AlertType | null>({
  key: 'alertState',
  default: null,
});

export default alertState;
