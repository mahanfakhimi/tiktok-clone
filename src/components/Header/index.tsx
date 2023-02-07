import { TiktokIcon } from "../icons";
import MoreActions from "./MoreActions";

const Header = () => {
  return (
    <header className="border-b py-2 fixed top-0 z-10 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <TiktokIcon />
        <div className="flex items-center">
          <button className="border border-primary-900 text-primary-900 hover:bg-[#fff1f4] active:bg-[#ffcad4] rounded py-1.5 px-5 mr-3 text-sm ">Upload</button>
          <button className="bg-primary-900 text-white border border-primary-900 rounded py-1.5 px-5 text-sm mr-3">Login</button>
          <MoreActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
