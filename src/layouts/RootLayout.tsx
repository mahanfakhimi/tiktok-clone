import { FC, ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex gap-x-4 max-w-6xl mx-auto pr-4 mt-16 mb-4">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
