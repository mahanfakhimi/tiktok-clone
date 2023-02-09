import { useState } from "react";
import LoginModal from "./LoginModal";

const UploadButton = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <div className="mr-4">
      <button onClick={() => setIsOpenLoginModal(true)} className="border border-primary-900 text-primary-900 hover:bg-[#fff1f4] active:bg-[#ffcad4] rounded py-1.5 px-5 text-sm ">
        Upload
      </button>
      <LoginModal isOpenModal={isOpenLoginModal} setIsOpenModal={setIsOpenLoginModal} />
    </div>
  );
};

export default UploadButton;
