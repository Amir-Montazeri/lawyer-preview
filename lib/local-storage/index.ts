export const setStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

export const deleteStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
