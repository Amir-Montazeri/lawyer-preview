'use client';

import { useRecoilState } from 'recoil';

import alertState from './alerts.atom';

const useAlertStore = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  const putAlert = (newAlert: AlertType) => {
    setAlert(newAlert);
  };

  const omitAlert = () => {
    setAlert(null);
  };

  const getAlert = (): AlertType | null => {
    return alert;
  };

  return { putAlert, omitAlert, getAlert };
};

export default useAlertStore;
