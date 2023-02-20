import { DiscoverIcon, HomeIcon, InboxIcon, UserIcon } from "../ui/icons";

const BottomNavigation = () => {
  return (
    <div className="bg-white p-3 fixed bottom-0 w-full flex justify-between items-center">
      <HomeIcon className="w-11 h-11" />
      <DiscoverIcon className="w-11 h-11" />
      <InboxIcon className="w-11 h-11" />
      <UserIcon className="w-11 h-11" />
    </div>
  );
};

export default BottomNavigation;
