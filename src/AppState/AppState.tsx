import React, { createContext, useState } from "react";

export interface AppStateType {
  Japanese: boolean;
  setJapanese: React.Dispatch<React.SetStateAction<boolean>>;
  setEnglish: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValues = {
  Japanese: true,
  setJapanese: () => {},
  setEnglish: () => {},
};

export const AppContext = createContext(defaultValues);

const AppState: React.FC<any> = ({children}) => {
  const [Japanese, setJapanese] = useState<boolean>(true);
  return (
    <AppContext.Provider
      value={{
        Japanese,
        setJapanese: () => {setJapanese(true)},
        setEnglish: () => {setJapanese(false)},
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
