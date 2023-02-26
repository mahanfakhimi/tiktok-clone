import { useContext } from "react";
import { LoginModalContextDispatcher } from "../contexts/LoginModalContextProvider";
import { UserContext } from "../contexts/UserContextProvider";
import Avatar from "../ui/Avatar";
import { AnimalsIcon, BeautyIcon, ComedyIcon, DanceIcon, FoodIcon, GamingIcon, HomeIcon, PersonIcon, SportsIcon } from "../ui/icons";

const Sidebar = () => {
  const setOpenLoginModal = useContext(LoginModalContextDispatcher);
  const user = useContext(UserContext);

  return (
    <aside className="max-w-xs h-screen border-r p-4 bg-white md:w-full">
      <nav className="font-semibold mb-4">
        <div className="cursor-pointer flex items-center gap-x-2 mb-4">
          <HomeIcon />
          <span className="hidden md:block">For You</span>
        </div>
        <div className="cursor-pointer flex items-center gap-x-2 mb-4">
          <PersonIcon />
          <span className="hidden md:block">Following</span>
        </div>
      </nav>

      {!user && (
        <div className="border-t border-b py-4 mb-4 hidden md:block">
          <p className="text-sm text-gray-500 mb-4">Log in to follow creators, like videos, and view comments</p>
          <button onClick={() => setOpenLoginModal?.(true)} className="text-[#fe2c55] font-semibold hover:bg-[#fff1f4] active:bg-[#ffcad4] w-full border border-[#fe2c55] py-3 px-8 rounded-md">
            Login
          </button>
        </div>
      )}

      <div>
        <p className="text-gray-500 text-sm mb-4 hidden md:block">Suggested accounts</p>
        <div className="flex flex-col gap-y-4">
          {[...Array(5)].map((user, index) => (
            <div key={index} className="flex items-center gap-x-3 cursor-pointer">
              <Avatar src="https://www.tubefilter.com/wp-content/uploads/2022/09/khaby-lame-acting.jpg" size="small" />
              <div className="hidden md:block">
                <h3 className="font-semibold text-sm">samsmith</h3>
                <p className="text-gray-500 text-xs mt-0.5">Sam Smith</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
