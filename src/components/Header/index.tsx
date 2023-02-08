import { useState } from "react";
import { TiktokIcon } from "../icons";
import LoginModal from "./LoginModal";
import MoreActions from "./MoreActions";

const Header = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <header className="border-b py-2 fixed top-0 z-10 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <TiktokIcon />
        <div className="flex items-center">
          <button onClick={() => setIsOpenLoginModal(true)} className="border border-primary-900 text-primary-900 hover:bg-[#fff1f4] active:bg-[#ffcad4] rounded py-1.5 px-5 mr-3 text-sm ">
            Upload
          </button>
          <button onClick={() => setIsOpenLoginModal(true)} className="bg-primary-900 text-white border border-primary-900 rounded py-1.5 px-5 text-sm mr-3">
            Login
          </button>
          <MoreActions />
        </div>
      </div>

      <LoginModal isOpenModal={isOpenLoginModal} setIsOpenModal={setIsOpenLoginModal} />
    </header>
  );
};

export default Header;
