import { createContext } from "react";
import { useEffect, useState, useContext } from "react";



const MenuContext = createContext();


export const MenuProvider = ({ children }) => {
  const [current_link, setCurrentLink] = useState("Home");
  const [loading, setLoading] = useState(true);


  const setCurrentLinkHelper = async (temp_current_link) => {
    await setCurrentLink(temp_current_link);
  };

  

  return (
    <MenuContext.Provider value={{ current_link, setCurrentLinkHelper }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useContextMenu = () => useContext(MenuContext);
export const MenuConsumer = MenuContext.Consumer;