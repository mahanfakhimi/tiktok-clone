import withModal from "../hocs/withModal";
import { UserIcon, FacebookIcon, GoogleIcon, TwitterIcon, InstagramIcon } from "../icons";

const LoginModal = () => {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-2xl">Log in to TikTok</h3>
      <ul className="flex flex-col gap-y-4 p-4 overflow-y-auto">
        <li className="flex items-center justify-center border rounded-sm p-2.5 cursor-pointer">
          <UserIcon className="text-xl absolute left-7" />
          <span className="text-sm font-medium">Use email / username</span>
        </li>
        <li className="flex items-center justify-center border rounded-sm p-2.5 cursor-pointer">
          <FacebookIcon className="text-xl absolute left-7" />
          <span className="text-sm font-medium">Continue with Facebook</span>
        </li>
        <li className="flex items-center justify-center border rounded-sm p-2.5 cursor-pointer">
          <GoogleIcon className="text-xl absolute left-7" />
          <span className="text-sm font-medium">Continue with Google</span>
        </li>
        <li className="flex items-center justify-center border rounded-sm p-2.5 cursor-pointer">
          <TwitterIcon className="text-xl absolute left-7" />
          <span className="text-sm font-medium">Continue with Twitter</span>
        </li>
        <li className="flex items-center justify-center border rounded-sm p-2.5 cursor-pointer">
          <InstagramIcon className="text-xl absolute left-7" />
          <span className="text-sm font-medium">Continue with Instagram</span>
        </li>
      </ul>

      <div className="text-sm py-5 border-t">
        <span>Don’t have an account?</span>
        <a href="#" className="text-primary-900 font-medium ml-2 hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default withModal(LoginModal);
