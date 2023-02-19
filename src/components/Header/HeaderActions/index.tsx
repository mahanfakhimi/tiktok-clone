import { useContext } from "react";
import { InboxIcon, MessagesIcon } from "../../../ui/icons";
import HeaderPopover from "./HeaderPopover";
import { UserContext } from "../../../contexts/UserContextProvider";
import { LoginContextDispatcher } from "../../../contexts/LoginModalProvider";

const HeaderActions = () => {
  const user = useContext(UserContext);
  const setOpenLoginModal = useContext(LoginContextDispatcher);

  const handleOpenLoginModal = () => setOpenLoginModal?.(true);

  return (
    <div className="flex items-center">
      <button onClick={handleOpenLoginModal} className="mr-4 border border-gray-300 text-black font-medium rounded py-1.5 px-5 text-sm">
        Upload
      </button>

      {user ? (
        <div className="flex items-center mr-4">
          <button className="mr-4">
            <MessagesIcon className="text-2xl" />
          </button>
          <button>
            <InboxIcon className="text-2xl" />
          </button>
        </div>
      ) : (
        <button onClick={handleOpenLoginModal} className="mr-4 bg-primary-900 text-white font-medium border border-primary-900 rounded py-1.5 px-5 text-sm">
          Login
        </button>
      )}

      <HeaderPopover />
    </div>
  );
};

export default HeaderActions;
