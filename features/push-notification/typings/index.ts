type NotificationType = {
  title: string;
  message: string;
  image: string;
  id: number;
  timeout?: number;
} & PushNotification;

interface PushNotificationAllowed {
  push: {
    pushEvenClientIsVisible: boolean;
  };
}
interface PushNotificationNotAllowed {
  push?: false;
}
type PushNotification = PushNotificationAllowed | PushNotificationNotAllowed;
