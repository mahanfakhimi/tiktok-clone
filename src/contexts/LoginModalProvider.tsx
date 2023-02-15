import { createContext, ReactNode, FC, useState, SetStateAction, Dispatch } from "react";
import LoginModal from "../common/LoginModal";

export const LoginContext = createContext<null | boolean>(null);
export const LoginContextDispatcher = createContext<null | Dispatch<SetStateAction<boolean>>>(null);

type LoginContextProviderProps = {
  children: ReactNode;
};

const LoginContextProvider: FC<LoginContextProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LoginContext.Provider value={isOpen}>
      <LoginContextDispatcher.Provider value={setIsOpen}>
        {children}
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </LoginContextDispatcher.Provider>
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
