import { DiscoverIcon, HomeIcon, InboxIcon, PlusIcon, UserIcon } from "../ui/icons";

const BottomNavigation = () => {
  return (
    <div className="bg-white p-3 fixed bottom-0 w-full gap-3 flex justify-between items-center">
      <button>
        <HomeIcon className="w-10 h-10" />
      </button>
      <button>
        <DiscoverIcon className="w-10 h-10" />
      </button>
      <button className="border-x-4 py-1.5 px-3 bg-black border-l-[#20D5EC] border-r-[#FA2D6C] rounded-full">
        <PlusIcon className="w-5 h-5 fill-white" />
      </button>
      <button>
        <InboxIcon className="w-10 h-10" />
      </button>
      <button>
        <UserIcon className="w-10 h-10" />
      </button>
    </div>
  );
};

export default BottomNavigation;
