import { Dispatch, FC, Fragment, SetStateAction } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { CloseIcon } from "../ui/icons";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

const withModal = (WrappedComponent: FC) => {
  return ({ isOpen, setIsOpen }: Props) => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>
          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-0" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-0">
                <Dialog.Panel className="w-full max-w-sm rounded-md bg-white text-left shadow-xl relative">
                  <div className="mb-16">
                    <button onClick={() => setIsOpen(false)} className="bg-gray-100 p-2 rounded-full absolute top-4 right-4">
                      <CloseIcon className="text-xl" />
                    </button>
                  </div>
                  <WrappedComponent />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };
};

export default withModal;
