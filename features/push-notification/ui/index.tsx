'use client';

import { useRecoilState } from 'recoil';
import { GrClose } from 'react-icons/gr';

import notificationState from '../store-manager/notifications.atom';
import useNotificationStore from '../store-manager';

function PushNotification() {
  const [notifications] = useRecoilState(notificationState),
    { omitNotification } = useNotificationStore();

  const renderedNotifications = notifications?.map((notification) => {
    const { title, message, id } = notification;
    return (
      <div
        key={notification.id}
        className={`relative bg-[#f5f5f5] p-[10px] mb-2 rounded-md shadow-sm shadow-white`}
      >
        <div
          className="absolute p-2 top-0 right-0 cursor-pointer"
          onClick={() => omitNotification(id)}
        >
          <GrClose />
        </div>
        <h2 className="text-black text-lg">{title}: </h2>
        <p className="text-gray-700 text-sm">
          {JSON.stringify(message, null, 2)}
        </p>
      </div>
    );
  });

  return (
    notifications.length > 0 && (
      <div className="fixed bottom-0 right-0 max-h-[80dvh] w-[85vw] sm:w-[400px] p-[10px] overflow-y-auto scrollar-w-thin z-30">
        {renderedNotifications}
      </div>
    )
  );
}

export default PushNotification;
