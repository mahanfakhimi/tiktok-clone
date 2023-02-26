import { createContext, ReactNode, FC, useState, SetStateAction, Dispatch } from "react";
import LoginModal from "../common/LoginModal";

export const LoginModalContext = createContext<null | boolean>(null);
export const LoginModalContextDispatcher = createContext<null | Dispatch<SetStateAction<boolean>>>(null);

type LoginModalContextProps = {
  children: ReactNode;
};

const LoginModalContextProvider: FC<LoginModalContextProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LoginModalContext.Provider value={isOpen}>
      <LoginModalContextDispatcher.Provider value={setIsOpen}>
        {children}
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </LoginModalContextDispatcher.Provider>
    </LoginModalContext.Provider>
  );
};

export default LoginModalContextProvider;
