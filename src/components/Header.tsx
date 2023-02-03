import { TiktokIcon, SearchIcon } from "./icons";

const Header = () => {
  return (
    <header className="border-b py-2 sticky top-0 z-10 bg-white w-full">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <TiktokIcon />
        <div className="flex items-center">
          <SearchIcon className="cursor-pointer mr-3 text-gray-400 active:text-gray-500" />
          <button className="border border-primary-900 text-primary-900 hover:bg-[#fff1f4] active:bg-[#ffcad4] rounded-md py-1.5 px-5 mr-3">Upload</button>
          <button className="bg-primary-900 text-white border border-primary-900 rounded-md py-1.5 px-5">log In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
