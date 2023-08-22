type NotEmptyArray<T> = {
  0: T;
} & Array<T>;

interface AlertType {
  title: string;
  description?: string;
  buttons?: NotEmptyArray<React.ReactNode>;
  timeout?: number;
}
