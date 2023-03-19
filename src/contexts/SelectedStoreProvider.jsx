import React, { createContext, useEffect, useState } from 'react';

export const SelectedStoreContext = createContext({
  handleSelectedStore: () => {},
});

function SelectedStoreProvider({ children }) {
  const [currentStore, setCurrentStore] = useState(
    JSON.parse(localStorage.getItem('current_selected_store')) || null
  );

  useEffect(() => {
    localStorage.setItem('current_selected_shop', JSON.stringify(currentStore));
  }, [currentStore]);

  const handleSelectedStore = (name) => {
    console.log('123');
    setCurrentStore({ name });
  };
  // { setCurrentShop, currentShop, handleStoreSelectedShop }
  return (
    <SelectedStoreContext.Provider value={{ handleSelectedStore }}>
      {children}
    </SelectedStoreContext.Provider>
  );
}

export default SelectedStoreProvider;
