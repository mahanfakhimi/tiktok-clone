import { FC, useState } from "react";
import LoginModal from "./Header/LoginModal";
import { HomeIcon, PersonIcon, LiveIcon } from "./icons";

const NavItem = ({ Icon, label }: { Icon: FC; label: string }) => (
  <div className="cursor-pointer flex items-center gap-x-2 mb-4">
    <Icon />
    <span className="hidden md:block">{label}</span>
  </div>
);

const LoginButton = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpenLoginModal(true)} className="text-[#fe2c55] font-semibold hover:bg-[#fff1f4] active:bg-[#ffcad4] w-full border border-[#fe2c55] py-3 px-8 rounded-md">
        Login
      </button>
      <LoginModal isOpenModal={isOpenLoginModal} setIsOpenModal={setIsOpenLoginModal} />
    </div>
  );
};

const LoginSection = () => (
  <div className="border-t border-b py-4 mb-4 hidden md:block">
    <p className="text-sm text-gray-500 mb-4">Log in to follow creators, like videos, and view comments</p>
    <LoginButton />
  </div>
);

const UserSuggestions = () => (
  <div>
    <p className="text-gray-500 text-sm mb-4 hidden md:block">Suggested accounts</p>
    <div className="flex flex-col gap-y-4">
      {[...Array(5)].map((user, index) => (
        <User key={index} />
      ))}
    </div>
  </div>
);

const User = () => (
  <div className="flex items-center gap-x-3 cursor-pointer">
    <img className="w-8 h-8 rounded-full object-cover" src="https://www.tubefilter.com/wp-content/uploads/2022/09/khaby-lame-acting.jpg" alt="" />
    <div className="hidden md:block">
      <h3 className="font-semibold text-sm">samsmith</h3>
      <p className="text-gray-500 text-xs mt-0.5">Sam Smith</p>
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="max-w-xs h-screen border-r p-4 bg-white">
      <nav className="font-semibold mb-4">
        <NavItem Icon={HomeIcon} label="For You" />
        <NavItem Icon={PersonIcon} label="Following" />
        <NavItem Icon={LiveIcon} label="Live" />
      </nav>
      <LoginSection />
      <UserSuggestions />
    </aside>
  );
};

export default Sidebar;
