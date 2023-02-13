import clsx from "clsx";
import { FC, ImgHTMLAttributes } from "react";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: "small" | "medium" | "large";
};

enum SIZE {
  small = "w-8 h-8",
  medium = "w-11 h-11",
  large = "w-14 h-14",
}

const Avatar: FC<AvatarProps> = ({ src, className, size = "medium", ...otherProps }) => {
  const classes = clsx("rounded-full object-cover", className, SIZE[size]);

  return <img src={src} alt="" className={classes} {...otherProps} />;
};

export default Avatar;
