import { DiscoverIcon, HomeIcon, InboxIcon, PlusIcon, UserIcon } from "../ui/icons";

const BottomNavigation = () => {
  return (
    <div className="flex items-center justify-between fixed bottom-0 w-full p-4 text-white">
      <HomeIcon className="text-4xl" />
      <DiscoverIcon className="text-4xl" />
      <PlusIcon className="text-4xl bg-white text-black" />
      <InboxIcon className="text-4xl" />
      <UserIcon className="text-4xl" />
    </div>
  );
};

export default BottomNavigation;
