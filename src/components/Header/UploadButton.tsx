import { useState } from "react";
import LoginModal from "./LoginModal";

const UploadButton = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <div className="mr-4">
      <button onClick={() => setIsOpenLoginModal(true)} className="border border-gray-300 text-black font-medium rounded py-1.5 px-5 text-sm">
        Upload
      </button>
      <LoginModal isOpenModal={isOpenLoginModal} setIsOpenModal={setIsOpenLoginModal} />
    </div>
  );
};

export default UploadButton;
