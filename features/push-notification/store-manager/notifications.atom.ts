import { atom } from 'recoil';

const notificationState = atom<NotificationType[]>({
  key: 'notificationState',
  default: [],
});

export default notificationState;
