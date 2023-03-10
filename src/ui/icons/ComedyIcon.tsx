import { memo } from "react";

const ComedyIcon = memo<JSX.IntrinsicElements["svg"]>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" fill="currentColor">
      <path fillRule="evenodd" d="M24 38c6.29 0 11.45-4.84 11.959-11 .045-.55-.407-1-.959-1H13c-.552 0-1.004.45-.959 1 .508 6.16 5.668 11 11.959 11zm0-4a8 8 0 01-6.93-4h13.86A8 8 0 0124 34z" clipRule="evenodd"></path>
      <path d="M18.376 20.059c.312.455.738.941 1.29.941H21c.552 0 1.01-.452.901-.994a5.002 5.002 0 00-9.802 0c-.11.542.349.994.901.994h1.333c.553 0 .979-.486 1.291-.941a1.665 1.665 0 012.752 0zM33.667 21c-.553 0-.979-.486-1.291-.941a1.665 1.665 0 00-2.752 0c-.312.455-.738.941-1.29.941H27c-.552 0-1.01-.452-.901-.994a5.002 5.002 0 019.802 0c.11.542-.349.994-.901.994h-1.333z"></path>
      <path fillRule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20zm-4 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16z" clipRule="evenodd"></path>
    </svg>
  );
});

export default ComedyIcon;
