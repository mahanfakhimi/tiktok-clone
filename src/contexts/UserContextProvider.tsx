import { createContext, useEffect, ReactNode, FC, useState, SetStateAction, Dispatch } from "react";

export const UserContext = createContext<null | boolean>(null);
export const UserContextDispatcher = createContext<null | Dispatch<SetStateAction<boolean>>>(null);

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setTimeout(() => setUser(true), 2000);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <UserContextDispatcher.Provider value={setUser}>{children}</UserContextDispatcher.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
