import { TiktokIcon } from "../icons";
import LoginButton from "./LoginButton";
import MoreActions from "./MoreActions";
import UploadButton from "./UploadButton";

const Header = () => {
  return (
    <header className="border-b py-2 fixed top-0 z-10 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <TiktokIcon />
        <div className="flex items-center">
          <UploadButton />
          <LoginButton />
          <MoreActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
