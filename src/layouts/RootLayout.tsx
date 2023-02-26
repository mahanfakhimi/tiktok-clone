import clsx from "clsx";
import { FC, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      <Header />
      <div
        className={clsx("flex gap-x-4 max-w-6xl mx-auto mt-16 mb-4", {
          "pr-4": !isMobileOrTablet,
        })}
      >
        {!isMobileOrTablet && <Sidebar />}
        {children}
        {isMobileOrTablet && <BottomNavigation />}
      </div>
    </div>
  );
};

export default RootLayout;
