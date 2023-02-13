import { Fragment, useState, useContext } from "react";
import { Transition, Switch, Popover } from "@headlessui/react";
import { DotsVerticalIcon, DarkIcon, KeyboardIcon, UserIcon, SettingIcon, LogoutIcon } from "../../ui/icons";
import { UserContext } from "../../contexts/UserContextProvider";
import clsx from "clsx";
import Avatar from "../../ui/Avatar";

const HeaderPopover = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const user = useContext(UserContext);
  const buttonStyles = "flex w-full items-center gap-x-3 cursor-pointer py-3 px-4 hover:bg-gray-100";

  const handleDarkModeToggle = () => setIsDarkModeEnabled((pv) => !pv);

  return (
    <div className="relative">
      <Popover>
        <Popover.Button className="flex items-center relative">{user ? <Avatar src="https://www.tubefilter.com/wp-content/uploads/2022/09/khaby-lame-acting.jpg" size="small" /> : <DotsVerticalIcon className="text-xl" />}</Popover.Button>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Popover.Panel className="bg-white shadow-[0_0_10px_#ddd] absolute right-0 top-10 w-60 py-2 rounded-md z-10">
            {user && (
              <>
                <button className={buttonStyles}>
                  <UserIcon className="text-xl" />
                  <span className="text-sm font-semibold">View profile</span>
                </button>
                <button className={buttonStyles}>
                  <SettingIcon className="text-xl" />
                  <span className="text-sm font-semibold">Settings</span>
                </button>
              </>
            )}

            <button className={buttonStyles}>
              <KeyboardIcon className="text-xl" />
              <span className="text-sm font-semibold">Keyboard shortcuts</span>
            </button>

            <button onClick={handleDarkModeToggle} className={clsx(buttonStyles, "flex items-center justify-between")}>
              <div className="flex items-center gap-x-3">
                <DarkIcon className="text-xl" />
                <span className="text-sm font-semibold">Dark Mode</span>
              </div>
              <Switch as="div" checked={isDarkModeEnabled} className={`relative w-11 h-6 rounded-full ${isDarkModeEnabled ? "bg-green-400" : "bg-gray-300"}`}>
                <span className={`w-5 h-5 top-1/2 -translate-y-1/2 bg-white absolute rounded-full transition duration-300 ease-in-out ${isDarkModeEnabled ? "translate-x-0" : "-translate-x-5"}`} />
              </Switch>
            </button>

            {user && (
              <button className={clsx(buttonStyles, "border-t")}>
                <LogoutIcon className="text-xl" />
                <span className="text-sm font-semibold">Logout</span>
              </button>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default HeaderPopover;
