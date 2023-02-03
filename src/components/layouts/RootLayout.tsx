import { FC, ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex gap-x-4 max-w-5xl mx-auto pr-4">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
