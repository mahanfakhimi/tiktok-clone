import { memo } from "react";

const GamingIcon = memo<JSX.IntrinsicElements["svg"]>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" fill="currentColor">
      <path d="M17 14.5a1 1 0 011 1v2h2a1 1 0 011 1v2a1 1 0 01-1 1h-2v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2v-2a1 1 0 011-1h2zM33 17.5a2 2 0 114 0 2 2 0 01-4 0zM31 19.5a2 2 0 100 4 2 2 0 000-4z"></path>
      <path
        fillRule="evenodd"
        d="M14 5.5c-5.523 0-10 4.477-10 10v19.369a7.631 7.631 0 0014.496 3.333l2.631-5.417a.2.2 0 01.18-.113h5.386a.2.2 0 01.18.113l2.63 5.417A7.631 7.631 0 0044 34.87V15.5c0-5.523-4.477-10-10-10H14zm-6 10a6 6 0 016-6h20a6 6 0 016 6v19.369a3.631 3.631 0 01-6.898 1.586l-2.631-5.418a4.2 4.2 0 00-3.778-2.365h-5.386a4.2 4.2 0 00-3.778 2.365l-2.631 5.418A3.632 3.632 0 018 34.869V15.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
});

export default GamingIcon;
