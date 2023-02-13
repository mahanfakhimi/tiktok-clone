import { Fragment, useState, useContext } from "react";
import { Transition, Switch, Popover } from "@headlessui/react";
import { DotsVerticalIcon, DarkIcon, KeyboardIcon, UserIcon, SettingIcon, LogoutIcon } from "../icons";
import { UserContext } from "../../contexts/UserProvider";
import clsx from "clsx";

const HeaderPopover = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const user = useContext(UserContext);
  const itemClass = "flex w-full items-center gap-x-3 cursor-pointer py-3 px-4 hover:bg-gray-100";

  const handleDarkModeToggle = () => setDarkModeEnabled((pv) => !pv);

  return (
    <div className="relative">
      <Popover>
        <Popover.Button className="flex items-center relative">
          {user ? <img className="w-8 h-8 rounded-full" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7156256988774629382~c5_720x720.jpeg?x-expires=1676102400&x-signature=OW1PFFRAwd7tn9eIhgGjMBM%2BxK4%3D" alt="" /> : <DotsVerticalIcon className="text-xl" />}
        </Popover.Button>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Popover.Panel className="bg-white shadow-[0_0_10px_#ddd] absolute right-0 top-10 w-60 py-2 rounded-md z-10">
            {user && (
              <>
                <button className={itemClass}>
                  <UserIcon className="text-xl" />
                  <span className="text-sm font-semibold">View profile</span>
                </button>
                <button className={itemClass}>
                  <SettingIcon className="text-xl" />
                  <span className="text-sm font-semibold">Settings</span>
                </button>
              </>
            )}

            <button className={itemClass}>
              <KeyboardIcon className="text-xl" />
              <span className="text-sm font-semibold">Keyboard shortcuts</span>
            </button>

            <button onClick={handleDarkModeToggle} className={clsx(itemClass, "flex items-center justify-between")}>
              <div className="flex items-center gap-x-3">
                <DarkIcon className="text-xl" />
                <span className="text-sm font-semibold">Dark Mode</span>
              </div>
              <Switch as="div" checked={darkModeEnabled} className={`relative w-11 h-6 rounded-full ${darkModeEnabled ? "bg-green-400" : "bg-gray-300"}`}>
                <span className={`w-5 h-5 top-1/2 -translate-y-1/2 bg-white absolute rounded-full transition duration-300 ease-in-out ${darkModeEnabled ? "translate-x-0" : "-translate-x-5"}`} />
              </Switch>
            </button>

            {user && (
              <button className={clsx(itemClass, "border-t")}>
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
