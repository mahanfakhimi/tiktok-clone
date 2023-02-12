import { ReactNode, FC } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={clsx("max-w-6xl mx-auto px-4 flex items-center justify-between", className)}>{children}</div>;
};

export default Container;
