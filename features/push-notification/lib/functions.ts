export const getNotificationPermission = (): NotificationPermission => {
  const permission = Notification.permission;
  return permission;
};

export const sendNotificationPermissionRequest = async () => {
  let permited = await Notification.requestPermission();

  return permited;
};

export const getClientVisibility = (): boolean => {
  const isVisible = document.visibilityState === 'visible';
  return isVisible;
};

export const pushNotification = ({
  title,
  message,
  image,
  push,
}: NotificationType) => {
  const clientIsVisible = getClientVisibility();

  if (
    push &&
    ((!push.pushEvenClientIsVisible && !clientIsVisible) ||
      push.pushEvenClientIsVisible)
  ) {
    const newNotification = new Notification(title, {
      body: message,
      icon: image,
    });
    return newNotification;
  }
};
