import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { InboxIcon, MessagesIcon } from "../icons";
import LoginButton from "./LoginButton";
import MoreActions from "./MoreActions";
import UploadButton from "./UploadButton";

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
      <MoreActions />
    </div>
  );
};

export default HeaderActions;
