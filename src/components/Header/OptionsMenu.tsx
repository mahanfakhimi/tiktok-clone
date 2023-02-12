import { Fragment, useState, useContext } from "react";
import { Menu, Transition, Switch } from "@headlessui/react";
import { DotsVerticalIcon, DarkIcon, KeyboardIcon, UserIcon, SettingIcon, LogoutIcon } from "../icons";
import { UserContext } from "../../contexts/UserProvider";

const OptionsMenu = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const user = useContext(UserContext);

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center relative">
          {user ? <img className="w-8 h-8 rounded-full" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7156256988774629382~c5_720x720.jpeg?x-expires=1676102400&x-signature=OW1PFFRAwd7tn9eIhgGjMBM%2BxK4%3D" alt="" /> : <DotsVerticalIcon className="text-xl" />}
        </Menu.Button>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items as="ul" className="bg-white shadow-[0_0_10px_#ddd] absolute right-0 top-10 w-60 py-2 rounded-md z-10">
            {user && (
              <>
                <Menu.Item as="li">
                  {({ active }) => (
                    <button className={`flex w-full items-center gap-x-3 cursor-pointer py-3 px-4 ${active && "bg-gray-100 "}`}>
                      <UserIcon className="text-xl" />
                      <span className="text-sm font-semibold">View profile</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <button className={`flex w-full items-center gap-x-3 cursor-pointer py-3 px-4 ${active && "bg-gray-100 "}`}>
                      <SettingIcon className="text-xl" />
                      <span className="text-sm font-semibold">Settings</span>
                    </button>
                  )}
                </Menu.Item>
              </>
            )}
            <Menu.Item as="li">
              {({ active }) => (
                <button className={`flex w-full items-center gap-x-3 cursor-pointer py-3 px-4 ${active && "bg-gray-100 "}`}>
                  <KeyboardIcon className="text-xl" />
                  <span className="text-sm font-semibold">Keyboard shortcuts</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item as="li">
              {({ active }) => (
                <button className={`flex w-full items-center justify-between cursor-pointer py-3 px-4 ${active && "bg-gray-100 "}`}>
                  <div className="flex items-center gap-x-3">
                    <DarkIcon className="text-xl" />
                    <span className="text-sm font-semibold">Dark Mode</span>
                  </div>
                  <Switch as="div" checked={darkModeEnabled} onChange={setDarkModeEnabled} className={`relative w-11 h-6 rounded-full ${darkModeEnabled ? "bg-green-400" : "bg-gray-300"}`}>
                    <span className={`w-5 h-5 top-1/2 -translate-y-1/2 bg-white absolute rounded-full transition duration-300 ease-in-out ${darkModeEnabled ? "translate-x-0" : "-translate-x-5"}`} />
                  </Switch>
                </button>
              )}
            </Menu.Item>
            {user && (
              <Menu.Item as="li">
                {({ active }) => (
                  <button className={`flex w-full border-t items-center gap-x-3 cursor-pointer py-3 px-4 ${active && "bg-gray-100 "}`}>
                    <LogoutIcon className="text-xl" />
                    <span className="text-sm font-semibold">Logout</span>
                  </button>
                )}
              </Menu.Item>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default OptionsMenu;
