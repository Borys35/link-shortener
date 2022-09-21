import Link from "next/link";
import Logo from "../../assets/logo-with-name.svg";

const Navbar = () => {
  return (
    <nav className="content w-full py-6">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
