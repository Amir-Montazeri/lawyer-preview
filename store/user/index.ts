'use client';

import { useRecoilState } from 'recoil';

import userState, { INITIAL_VALUE } from './user.atom';

const useUserStore = () => {
  const [user, setUser] = useRecoilState(userState);

  const setUserInformation = (information: UserType) => {
    setUser(information);
  };

  function addUserInformation<K extends keyof UserType>(
    key: K,
    value: UserType[K]
  ) {
    setUser((prevState) => {
      const reformedUser: UserType = { ...prevState, [key]: value };
      return reformedUser;
    });
  }

  const omitUserInformation = (keys: RequiredItemArray<keyof UserType>) => {
    setUser(INITIAL_VALUE);
  };

  const getUser = user;

  return {
    setUserInformation,
    addUserInformation,
    omitUserInformation,
    getUser,
  };
};

export default useUserStore;
