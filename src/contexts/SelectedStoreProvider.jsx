import React, { createContext, useContext, useEffect, useState } from 'react';

import { notify, toastComponent } from '../hooks/useToastify';
import { LoginContext } from './LoginContextProvider';

export const SelectedStoreContext = createContext({
  handleSelectedStore: () => {},
});

function SelectedStoreProvider({ children }) {
  const { currentUser } = useContext(LoginContext);
  const [currentStore, setCurrentStore] = useState(
    JSON.parse(
      localStorage.getItem(`${currentUser.user.email}-current_selected_store`)
    ) || null
  );

  useEffect(() => {
    localStorage.setItem(
      `${currentUser.user.email}-current_selected_store`,
      JSON.stringify(currentStore)
    );
  }, [currentStore]);

  const handleSelectedStore = (name) => {
    if (name === currentStore) {
      notify(`${name}를 이미 선택했습니다.`);
      return;
    }

    notify(`${name}을 선택했습니다.`);
    console.log('123');
    setCurrentStore(name);
  };
  // { setCurrentShop, currentShop, handleStoreSelectedShop }
  return (
    <SelectedStoreContext.Provider value={{ currentStore, handleSelectedStore }}>
      {toastComponent()}
      {children}
    </SelectedStoreContext.Provider>
  );
}

export default SelectedStoreProvider;
