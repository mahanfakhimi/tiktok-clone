import { memo } from "react";

const MenuIcon = memo<JSX.IntrinsicElements["svg"]>((props) => {
  return (
    <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  );
});

export default MenuIcon;
