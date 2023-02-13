import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import LoginModal from "../common/LoginModal";

type ModalContextProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextProps | null>(null);

const ModalContextProvider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen((pv) => !pv);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
