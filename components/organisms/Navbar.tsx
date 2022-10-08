import { useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "../../assets/logo-with-name.svg";
import Button from "../atoms/Button";
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="content flex items-center justify-between w-full">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className="bg-bg-100 py-4 my-2 px-10 rounded-lg flex items-center gap-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="mailto:boryskac10@gmail.com">Contact</NavLink>
        {status === "authenticated" ? (
          <>
            <Button to="/dashboard" className="ml-12">
              Dashboard
            </Button>
          </>
        ) : status === "unauthenticated" ? (
          <>
            <Button to="/login" variant="secondary" className="ml-12">
              Login
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
