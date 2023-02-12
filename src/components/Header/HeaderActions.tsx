import { useContext, useState } from "react";
import { InboxIcon, MessagesIcon } from "../icons";
import OptionsMenu from "./OptionsMenu";
import { UserContext } from "../../contexts/UserProvider";
import LoginModal from "../LoginModal";

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

const RenderOtherThings = () => {
  const user = useContext(UserContext);

  if (user)
    return (
      <div className="flex items-center mr-4">
        <button className="mr-4">
          <MessagesIcon className="text-2xl" />
        </button>
        <button>
          <InboxIcon className="text-2xl" />
        </button>
      </div>
    );

  return <LoginButton />;
};

const HeaderActions = () => {
  return (
    <div className="flex items-center">
      <UploadButton />
      <RenderOtherThings />
      <OptionsMenu />
    </div>
  );
};

export default HeaderActions;
