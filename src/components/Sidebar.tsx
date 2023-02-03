import { HomeIcon, PersonIcon, LiveIcon } from "./icons";

const Sidebar = () => {
  return (
    <aside className="max-w-xs h-screen border-r pt-4 px-4 sticky">
      <div>
        <div className="flex items-center gap-x-2 font-semibold mb-4 cursor-pointer">
          <HomeIcon />
          <span className="hidden md:block">For You</span>
        </div>
        <div className="flex items-center gap-x-2 font-semibold mb-4 cursor-pointer">
          <PersonIcon />
          <span className="hidden md:block">Following</span>
        </div>
        <div className="flex items-center gap-x-2 font-semibold mb-4 cursor-pointer">
          <LiveIcon />
          <span className="hidden md:block">Live</span>
        </div>
      </div>

      <div className="border-t border-b py-4 mb-4 hidden md:block">
        <p className="leading-6 mb-4 text-sm text-gray-500">Log in to follow creators, like videos, and view comments</p>
        <button className="text-[#fe2c55] font-semibold hover:bg-[#fff1f4] active:bg-[#ffcad4] w-full border border-[#fe2c55] py-3 px-8 rounded-md">Log In</button>
      </div>

      <div>
        <p className="text-gray-500 text-sm mb-4 hidden md:block">Suggested accounts</p>
        <div className="flex flex-col gap-y-4">
          {[...Array(5)].map((user, index) => (
            <div key={index} className="flex items-center gap-x-3 cursor-pointer">
              <img className="w-8 h-8 rounded-full" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/569474fd9654d27c27c9e29e407e3e61~c5_100x100.jpeg?x-expires=1675609200&x-signature=lb9NOg3zVoPWYEOkbzE8be8mhnQ%3D" alt="" />
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
