import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { InboxIcon, MessagesIcon } from "../icons";
import LoginButton from "./LoginButton";
import MoreActions from "./MoreActions";
import UploadButton from "./UploadButton";

const UserActions = () => {
  const user = useContext(UserContext);

  return user ? (
    <div className="flex items-center mr-4">
      <button className="mr-4">
        <MessagesIcon className="text-2xl" />
      </button>
      <button>
        <InboxIcon className="text-2xl" />
      </button>
    </div>
  ) : (
    <LoginButton />
  );
};

const HeaderActions = () => {
  return (
    <div className="flex items-center">
      <UploadButton />
      <UserActions />
      <MoreActions />
    </div>
  );
};

export default HeaderActions;
