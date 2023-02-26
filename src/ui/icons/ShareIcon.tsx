import { memo } from "react";

const ShareIcon = memo<JSX.IntrinsicElements["svg"]>((props) => {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.8 10.3085C25.8 9.04248 27.3162 8.39262 28.233 9.26572L42.1847 22.5524C43.4124 23.7216 43.3695 25.6932 42.092 26.8079L28.1867 38.9414C27.2552 39.7542 25.8 39.0926 25.8 37.8564V32.3581C25.8 32.3581 10.8695 29.6685 6.08025 38.4593C5.63374 39.2789 3.89328 39.5657 4.24706 35.4764C5.72648 27.9499 8.75001 16.1999 25.8 16.1999V10.3085Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.0958 16.8L38.8639 22.3362C39.3536 23.3155 39.1184 24.5021 38.2921 25.2206L25.8958 36C25.8958 36 25.2958 39 27.0958 39C28.8958 39 43.2958 25.8 43.2958 25.8C43.2958 25.8 43.8958 24 42.0958 22.2C40.2958 20.4 36.0958 16.8 36.0958 16.8Z"
        fill="currentColor"
      ></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.7997 16.8389V32.4389C25.7997 32.4389 11.5114 30.4255 7.03635 37.2389C2.73042 43.7949 3.12588 29.8349 9.60816 22.8829C16.0904 15.931 25.7997 16.8389 25.7997 16.8389Z" fill="url(#ShareShadowColor_paint0_radial)"></path>
    </svg>
  );
});

export default ShareIcon;
