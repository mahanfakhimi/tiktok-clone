import { useState } from "react";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <div className="mr-4">
      <button onClick={() => setIsOpenLoginModal(true)} className="bg-primary-900 text-white font-medium border border-primary-900 rounded py-1.5 px-5 text-sm">
        Login
      </button>
      <LoginModal isOpenModal={isOpenLoginModal} setIsOpenModal={setIsOpenLoginModal} />
    </div>
  );
};

export default LoginButton;
