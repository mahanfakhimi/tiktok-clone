import { Fragment, useState } from "react";
import { Menu, Transition, Switch, Dialog } from "@headlessui/react";
import { DotsVerticalIcon, DarkIcon, KeyboardIcon } from "../icons";

const MoreActions = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [iskeyboardShortcutsModalOpen, setKeyboardShortcutsModalOpen] = useState(false);

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center relative">
          <DotsVerticalIcon className="text-xl" />
        </Menu.Button>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items as="ul" className="bg-white shadow-[0_0_10px_#ddd] absolute right-0 top-9 w-60 py-2 rounded-md z-10">
            <Menu.Item as="li" onClick={() => setKeyboardShortcutsModalOpen(true)}>
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
                  <Switch as="div" checked={darkModeEnabled} onChange={setDarkModeEnabled} className={`flex items-center relative w-11 h-6 rounded-full ${darkModeEnabled ? "bg-green-400" : "bg-gray-300"}`}>
                    <span className={`w-5 h-5 bg-white absolute rounded-full transition duration-300 ease-in-out ${darkModeEnabled ? "translate-x-[1.4rem]" : "translate-x-[0.1rem]"}`} />
                  </Switch>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      <Transition appear show={iskeyboardShortcutsModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setKeyboardShortcutsModalOpen(false)}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>
          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-0" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-0">
                <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 text-left shadow-xl">
                  <Dialog.Title>Payment successful</Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MoreActions;
