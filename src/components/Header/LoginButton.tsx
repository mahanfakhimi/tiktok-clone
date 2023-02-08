import { useState } from "react";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpenLoginModal(true)} className="bg-primary-900 text-white border border-primary-900 rounded py-1.5 px-5 text-sm mr-3">
        Login
      </button>
      <LoginModal isOpenModal={isOpenLoginModal} setIsOpenModal={setIsOpenLoginModal} />
    </div>
  );
};

export default LoginButton;
