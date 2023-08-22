'use client';

import { useRecoilState } from 'recoil';
import { produce } from 'immer';

import notificationState from './notifications.atom';
import { pushNotification } from '../lib/functions';

function useNotificationStore() {
  const [notifications, setNotification] = useRecoilState(notificationState);

  const addNotification = (newNotification: NotificationType) => {
    const { timeout } = newNotification;
    setNotification(
      produce((draft) => {
        draft?.unshift(newNotification);
      })
    );

    pushNotification(newNotification);

    const timerID = setTimeout(() => {
      omitNotification(newNotification.id);
    }, timeout || 5000);
    return () => clearTimeout(timerID);
  };

  const omitNotification = (id: number) => {
    setNotification((prevState) => {
      return prevState.filter((prev) => prev.id !== id);
    });
  };

  const getSpecificID = (): number => {
    let availableID: number | undefined = undefined;
    let usedIDs = notifications?.map((notification) => {
      return notification.id;
    });

    for (let index = 0; !availableID; index++) {
      if (!usedIDs?.includes(index)) {
        availableID = index;
      }
    }
    return availableID;
  };

  return { addNotification, omitNotification, getSpecificID };
}

export default useNotificationStore;
