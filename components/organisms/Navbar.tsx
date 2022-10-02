import Link from "next/link";
import Logo from "../../assets/logo-with-name.svg";
import Button from "../atoms/Button";

const Navbar = () => {
  return (
    <nav className="content flex items-center justify-between w-full">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className="bg-bg-100 py-6 px-10 flex">
        <Button to="/dashboard">Dashboard</Button>
      </div>
    </nav>
  );
};

export default Navbar;
