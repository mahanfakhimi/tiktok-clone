import { TiktokIcon } from "../icons";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <header className="border-b py-2 fixed top-0 z-10 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <TiktokIcon />
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
