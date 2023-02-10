import Container from "../atoms/Container";
import { TiktokIcon } from "../icons";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <header className="border-b py-2 fixed top-0 z-10 bg-white w-full">
      <Container className="flex items-center justify-between">
        <TiktokIcon />
        <HeaderActions />
      </Container>
    </header>
  );
};

export default Header;
